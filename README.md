# Groq Chat

A responsive Angular chat application backed by a Python FastAPI server and Groq's
Chat Completions API.

## Structure

- `frontend/` - Angular application
- `backend/` - Python/FastAPI API, tests, and dependencies
- `render.yaml` - Render Blueprint

Conversations stay in browser `localStorage`. The Groq API key stays in the
Python backend and is never returned or bundled into the frontend.

## Requirements

- Node.js `>=24.15.0 <25` and npm
- Python 3.11+
- A Groq API key from [Groq Console](https://console.groq.com/keys)

## Local development

```bash
npm ci
npm run install:dev
cp .env.example .env
```

Set `GROQ_API_KEY` and `EXA_API_KEY` in `.env`, then run:

```bash
npm run dev
```

Open [http://localhost:4200](http://localhost:4200). Angular proxies `/api`
requests to the FastAPI server on port 3000.

To run only the Python server:

```bash
npm start
```

## Production

```bash
npm run build
npm run install:python
npm run start:prod
```

The Angular build is written to `frontend/dist/groq-chat/browser`. FastAPI
serves that directory and its Angular Router routes, along with `/api` routes.

## API

- `GET /api/health`
- `GET /api/models`
- `POST /api/chat`

## Render deployment

The included `render.yaml` configures a Python Render Web Service. Push the
repository to GitHub, create a Render Blueprint, and set `GROQ_API_KEY` and
`EXA_API_KEY` when prompted. Web search requires an Exa API key.

For a manually configured Render service:

- Build command: `npm ci --include=dev && npm run build && python3 -m pip install --upgrade pip && python3 -m pip install -r backend/requirements.txt`
- Start command: `python3 -m uvicorn backend.app:app --host 0.0.0.0 --port $PORT`
- Environment: `GROQ_API_KEY`, `EXA_API_KEY` (secrets)

Do not set a fixed `PORT` on Render.

## Checks

```bash
npm run build
npm run test:server
npm test
```
