import os

from fastapi.testclient import TestClient

from backend.app import app


client = TestClient(app)


def test_health_endpoint():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_search_rejects_empty_query():
    response = client.get("/api/search", params={"query": "   "})
    assert response.status_code == 400


def test_image_search_rejects_empty_query():
    response = client.get("/api/images", params={"query": "   "})
    assert response.status_code == 400


def test_image_search_returns_commons_results(monkeypatch):
    class FakeResponse:
        def raise_for_status(self):
            pass

        def json(self):
            return {
                "query": {
                    "pages": [
                        {
                            "title": "File:Red fox.jpg",
                            "imageinfo": [
                                {
                                    "mime": "image/jpeg",
                                    "thumburl": "https://thumb.wikimedia.org/example.jpg",
                                    "descriptionurl": "https://commons.wikimedia.org/wiki/File:Red_fox.jpg",
                                    "extmetadata": {
                                        "LicenseShortName": {"value": "CC BY-SA 4.0"},
                                        "Artist": {"value": "<a>Example photographer</a>"},
                                    },
                                }
                            ],
                        }
                    ]
                }
            }

    class FakeClient:
        def __init__(self, *, timeout):
            assert timeout == 12.0

        async def __aenter__(self):
            return self

        async def __aexit__(self, *_args):
            pass

        async def get(self, url, *, params, headers):
            assert url == "https://commons.wikimedia.org/w/api.php"
            assert params["gsrsearch"] == "red fox"
            assert params["iiurlwidth"] == "640"
            assert headers["User-Agent"].startswith("FastBot/")
            return FakeResponse()

    monkeypatch.setattr("backend.app.httpx.AsyncClient", FakeClient)
    response = client.get("/api/images", params={"query": "red fox"})

    assert response.status_code == 200
    assert response.json() == {
        "results": [
            {
                "title": "Red fox.jpg",
                "thumbnailUrl": "https://thumb.wikimedia.org/example.jpg",
                "pageUrl": "https://commons.wikimedia.org/wiki/File:Red_fox.jpg",
                "license": "CC BY-SA 4.0",
                "attribution": "Example photographer",
            }
        ]
    }


def test_search_reports_missing_exa_credentials(monkeypatch):
    monkeypatch.delenv("EXA_API_KEY", raising=False)
    response = client.get("/api/search", params={"query": "latest news"})
    assert response.status_code == 503
    assert "EXA_API_KEY" in response.json()["error"]


def test_search_returns_exa_results(monkeypatch):
    class FakeResult:
        title = "Exa result"
        url = "https://example.com"
        highlights = ["A useful excerpt."]

    class FakeResponse:
        results = [FakeResult()]

    class FakeExa:
        def __init__(self, *, api_key):
            assert api_key == "exa-test-key"

        def search(self, query, **options):
            assert query == "latest news"
            assert options == {
                "type": "auto",
                "num_results": 5,
                "contents": {"highlights": True},
            }
            return FakeResponse()

    monkeypatch.setenv("EXA_API_KEY", "exa-test-key")
    monkeypatch.setattr("backend.app.Exa", FakeExa)
    response = client.get("/api/search", params={"query": "latest news"})
    assert response.status_code == 200
    assert response.json() == {
        "results": [
            {
                "title": "Exa result",
                "url": "https://example.com",
                "snippet": "A useful excerpt.",
            }
        ]
    }


def test_model_endpoint():
    response = client.get("/api/models")
    assert response.status_code == 200
    assert [model["id"] for model in response.json()] == [
        "openai/gpt-oss-20b",
        "openai/gpt-oss-120b",
    ]


def test_chat_rejects_unlisted_model():
    response = client.post(
        "/api/chat",
        json={
            "model": "not-a-groq-model",
            "messages": [{"role": "user", "content": "hello"}],
            "systemPrompt": "",
            "maxTokens": 100,
        },
    )
    assert response.status_code == 400


def test_valid_chat_reports_missing_credentials(monkeypatch):
    monkeypatch.delenv("GROQ_API_KEY", raising=False)
    response = client.post(
        "/api/chat",
        json={
            "model": "openai/gpt-oss-20b",
            "messages": [{"role": "user", "content": "hello"}],
            "systemPrompt": "You are a helpful assistant.",
            "reasoningEffort": "medium",
            "maxTokens": 100,
        },
    )
    assert response.status_code == 503
    assert "GROQ_API_KEY" in response.json()["error"]
