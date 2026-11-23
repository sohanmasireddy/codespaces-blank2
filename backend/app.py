import asyncio
import json
import os
import time
from pathlib import Path
from typing import Literal

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from groq import AsyncGroq
from pydantic import BaseModel, ConfigDict, Field, model_validator
from ddgs import DDGS
from ddgs.exceptions import DDGSException


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
    try:
        results = list(DDGS().text(query, max_results=5))
        return {
            "results": [
                {
                    "title": result.get("title", ""),
                    "url": result.get("href", ""),
                    "snippet": result.get("body", ""),
                }
                for result in results
            ]
        }
    except DDGSException as exc:
        if str(exc) == "No results found.":
            return {"results": []}
        print(f"DuckDuckGo search failed: {exc}")
        return JSONResponse(
            status_code=502,
            content={"error": "Web search is temporarily unavailable."},
        )
    except Exception as exc:
        print(f"DuckDuckGo search failed: {exc}")
        return JSONResponse(
            status_code=502,
            content={"error": "Web search is temporarily unavailable."},
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
