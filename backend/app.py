import asyncio
import html
import json
import os
import re
import time
from pathlib import Path
from typing import Literal
from urllib.parse import urlsplit

import httpx
from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from exa_py import Exa
from groq import AsyncGroq
from pydantic import BaseModel, ConfigDict, Field, model_validator


MODELS = [
    {
        "id": "openai/gpt-oss-20b",
        "label": "GPT-OSS 20B",
        "contextWindow": 131_072,
        "maxCompletionTokens": 65_536,
        "supportsTemperature": False,
        "supportsReasoning": True,
    },
    {
        "id": "openai/gpt-oss-120b",
        "label": "GPT-OSS 120B",
        "contextWindow": 131_072,
        "maxCompletionTokens": 65_536,
        "supportsTemperature": False,
        "supportsReasoning": True,
    },
]
MODEL_IDS = {model["id"] for model in MODELS}
COMMONS_API_URL = "https://commons.wikimedia.org/w/api.php"


class Message(BaseModel):
    model_config = ConfigDict(extra="forbid")
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=100_000)


class ChatRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")
    model: str
    messages: list[Message] = Field(min_length=1, max_length=80)
    systemPrompt: str = Field(max_length=8_000)
    reasoningEffort: Literal["low", "medium", "high"] | None = None
    temperature: float | None = Field(default=None, ge=0, le=2)
    maxTokens: int = Field(ge=1, le=131_072)

    @model_validator(mode="after")
    def validate_request(self):
        if self.model not in MODEL_IDS:
            raise ValueError("The selected model is not available.")
        model = next(item for item in MODELS if item["id"] == self.model)
        if self.maxTokens > model["maxCompletionTokens"]:
            raise ValueError(
                f"maxTokens exceeds {model['id']}'s {model['maxCompletionTokens']}-token output limit."
            )
        if self.temperature is not None and not model["supportsTemperature"]:
            raise ValueError(f"Temperature is not supported by {model['id']}.")
        if self.reasoningEffort is not None and not model["supportsReasoning"]:
            raise ValueError(f"Reasoning effort is not supported by {model['id']}.")
        total_characters = len(self.systemPrompt) + sum(
            len(message.content) for message in self.messages
        )
        if total_characters > 100_000:
            raise ValueError("Conversation is too long. Start a new chat or remove earlier messages.")
        return self


app = FastAPI()
chat_requests: dict[str, list[float]] = {}

@app.middleware("http")
async def security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
    return response


@app.exception_handler(ValueError)
async def value_error_handler(_request: Request, exc: ValueError):
    return JSONResponse(status_code=400, content={"error": str(exc)})


@app.exception_handler(RequestValidationError)
async def validation_error_handler(_request: Request, exc: RequestValidationError):
    issues = [
        {"path": [item["loc"][-1] if item["loc"] else "body"], "message": item["msg"]}
        for item in exc.errors()
    ]
    return JSONResponse(
        status_code=400,
        content={"error": "Invalid chat request.", "issues": issues},
    )


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.get("/api/models")
async def models():
    return MODELS


@app.get("/api/search")
async def search(query: str):
    query = query.strip()
    if not 1 <= len(query) <= 500:
        return JSONResponse(
            status_code=400,
            content={"error": "Search query must be between 1 and 500 characters."},
        )
    api_key = os.getenv("EXA_API_KEY")
    if not api_key:
        return JSONResponse(
            status_code=503,
            content={
                "error": "Exa is not configured on this server. Set the EXA_API_KEY environment variable."
            },
        )
    try:
        exa = Exa(api_key=api_key)
        response = await asyncio.to_thread(
            exa.search,
            query,
            type="auto",
            num_results=5,
            contents={"highlights": True},
        )
        return {
            "results": [
                {
                    "title": result.title or "",
                    "url": result.url,
                    "snippet": "\n".join(result.highlights or []),
                }
                for result in response.results
            ]
        }
    except Exception as exc:
        print(f"Exa search failed: {exc}")
        return JSONResponse(
            status_code=502,
            content={"error": "Web search is temporarily unavailable."},
        )


def plain_metadata(value: object, max_length: int = 200) -> str:
    if not isinstance(value, str):
        return ""
    return html.unescape(re.sub(r"<[^>]*>", "", value)).strip()[:max_length]


async def commons_image_results(query: str) -> list[dict[str, str]]:
    params = {
        "action": "query",
        "format": "json",
        "formatversion": "2",
        "generator": "search",
        "gsrsearch": query,
        "gsrnamespace": "6",
        "gsrlimit": "5",
        "prop": "imageinfo",
        "iiprop": "url|mime|extmetadata",
        "iiextmetadatafilter": "Artist|LicenseShortName",
        "iiurlwidth": "640",
    }
    async with httpx.AsyncClient(timeout=12.0) as client:
        response = await client.get(
            COMMONS_API_URL,
            params=params,
            headers={"User-Agent": "FastBot/1.0 (Wikimedia Commons image search)"},
        )
        response.raise_for_status()
        payload = response.json()

    if not isinstance(payload, dict) or not isinstance(payload.get("query"), dict):
        return []
    pages = payload["query"].get("pages", [])
    if not isinstance(pages, list):
        return []

    images: list[dict[str, str]] = []
    for page in pages:
        if not isinstance(page, dict):
            continue
        image_info_list = page.get("imageinfo")
        if not isinstance(image_info_list, list) or not image_info_list:
            continue
        image_info = image_info_list[0]
        if not isinstance(image_info, dict) or not str(image_info.get("mime", "")).startswith(
            "image/"
        ):
            continue
        thumbnail_url = image_info.get("thumburl")
        page_url = image_info.get("descriptionurl")
        if not isinstance(thumbnail_url, str) or not isinstance(page_url, str):
            continue
        if (
            urlsplit(thumbnail_url).hostname
            not in {"thumb.wikimedia.org", "upload.wikimedia.org"}
            or urlsplit(page_url).hostname != "commons.wikimedia.org"
            or not thumbnail_url.startswith("https://")
            or not page_url.startswith("https://")
        ):
            continue

        metadata = image_info.get("extmetadata")
        if not isinstance(metadata, dict):
            metadata = {}
        images.append(
            {
                "title": plain_metadata(page.get("title", "")).removeprefix("File:"),
                "thumbnailUrl": thumbnail_url,
                "pageUrl": page_url,
                "license": plain_metadata(
                    metadata.get("LicenseShortName", {}).get("value")
                    if isinstance(metadata.get("LicenseShortName"), dict)
                    else ""
                )
                or "License information unavailable",
                "attribution": plain_metadata(
                    metadata.get("Artist", {}).get("value")
                    if isinstance(metadata.get("Artist"), dict)
                    else ""
                ),
            }
        )
    return images


@app.get("/api/images")
async def search_images(query: str):
    query = query.strip()
    if not 1 <= len(query) <= 500:
        return JSONResponse(
            status_code=400,
            content={"error": "Image search query must be between 1 and 500 characters."},
        )
    try:
        return {"results": await commons_image_results(query)}
    except (httpx.HTTPError, ValueError) as exc:
        print(f"Wikimedia Commons image search failed: {exc}")
        return JSONResponse(
            status_code=502,
            content={"error": "Image search is temporarily unavailable."},
        )


def is_rate_limited(client_ip: str) -> bool:
    now = time.monotonic()
    cutoff = now - 15 * 60
    timestamps = [timestamp for timestamp in chat_requests.get(client_ip, []) if timestamp > cutoff]
    chat_requests[client_ip] = timestamps
    if len(timestamps) >= 30:
        return True
    timestamps.append(now)
    return False


def send_event(event: dict) -> str:
    return f"data: {json.dumps(event, ensure_ascii=False)}\n\n"


def groq_error_message(status: int | None) -> str:
    if status in (401, 403):
        return "Groq rejected the server credentials. Check the GROQ_API_KEY configuration."
    if status == 404:
        return "Groq no longer recognizes this model. Choose another available model in settings."
    if status == 429:
        return "Groq rate limit or usage quota reached. Please wait and try again."
    if status is None:
        return "The Groq request timed out or the connection was interrupted. Please try again."
    if status >= 500:
        return "Groq is temporarily unavailable. Please try again shortly."
    return "The Groq request failed. Check your model settings and try again."


@app.post("/api/chat")
async def chat(payload: ChatRequest, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    if is_rate_limited(client_ip):
        return JSONResponse(
            status_code=429,
            content={"error": "Too many chat requests. Please wait before trying again."},
            headers={"Retry-After": "900"},
        )

    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        return JSONResponse(
            status_code=503,
            content={
                "error": "Groq is not configured on this server. Set the GROQ_API_KEY environment variable."
            },
        )

    async def stream():
        try:
            client = AsyncGroq(api_key=api_key, timeout=120.0, max_retries=0)
            groq_messages = [{"role": "system", "content": payload.systemPrompt}]
            groq_messages.extend(
                {"role": message.role, "content": message.content}
                for message in payload.messages
            )
            options = {
                "model": payload.model,
                "messages": groq_messages,
                "max_completion_tokens": payload.maxTokens,
                "stream": True,
            }
            model = next(item for item in MODELS if item["id"] == payload.model)
            if model["supportsReasoning"] and payload.reasoningEffort:
                options["reasoning_effort"] = payload.reasoningEffort
            if model["supportsTemperature"] and payload.temperature is not None:
                options["temperature"] = payload.temperature

            response = await client.chat.completions.create(**options)
            async for chunk in response:
                if await request.is_disconnected():
                    break
                text = chunk.choices[0].delta.content if chunk.choices else None
                if isinstance(text, str) and text:
                    yield send_event({"type": "delta", "text": text})
            else:
                yield send_event({"type": "done"})
        except asyncio.CancelledError:
            return
        except Exception as exc:
            status = getattr(exc, "status_code", None)
            if status is None:
                status = getattr(exc, "status", None)
            print(f"Groq streaming request failed: status={status}")
            yield send_event({"type": "error", "message": groq_error_message(status)})

    return StreamingResponse(
        stream(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


project_directory = Path(__file__).resolve().parent.parent
frontend_directory = project_directory / "frontend" / "dist" / "groq-chat" / "browser"


@app.get("/api/{path:path}", include_in_schema=False)
async def api_not_found(path: str):
    return JSONResponse(status_code=404, content={"error": "API route not found."})

if frontend_directory.exists():
    app.mount("/", StaticFiles(directory=frontend_directory, html=True), name="frontend")
