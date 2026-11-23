import os

from fastapi.testclient import TestClient

from backend.app import app


client = TestClient(app)


def test_health_endpoint():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


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
