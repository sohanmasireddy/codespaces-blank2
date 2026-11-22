# Groq Chat

A responsive Angular chat application backed by Groq's Chat Completions API. The
Angular app and Express API are served from one Node.js process in production.
Conversations and preferences stay in the current browser; the Groq API key stays
on the server.

## Requirements

- Node.js `>=24.15.0 <25` and npm
- A Groq API key from [Groq Console](https://console.groq.com/keys)

## Local development

```bash
npm ci
cp .env.example .env
```

Add your key to `.env`:

```dotenv
GROQ_API_KEY=your_real_key_here
```

Do not commit `.env`. Start both services:

```bash
npm run dev
```

Open [http://localhost:4200](http://localhost:4200). Angular's development
server proxies `/api` requests to Express on port 3000. Alternatively,
`npm start` runs only the Express server on port 3000.

## Build and run in production mode

```bash
npm run build
npm run start:prod
```

The build produces the optimized Angular app in `dist/groq-chat/browser` and
compiles the API to `dist-server/server`. Express serves both the API and
Angular files, including the Angular Router fallback. The server uses
`process.env.PORT` (3000 locally when it is unset).

## API

- `GET /api/health` — health check
- `GET /api/models` — the server's explicitly configured production-model list
- `POST /api/chat` — validated, cancellable Server-Sent Events stream

The server validates request sizes, roles, model IDs, generation settings, and
output-token limits with Zod. Chat requests are limited to 30 per IP per 15
minutes. The Groq key is read only from `GROQ_API_KEY`; it is never included in
the frontend bundle or returned by an endpoint. Streaming errors are returned
as safe, user-facing messages. If Groq reports usage in a stream, the UI shows
the token total; the current stream API does not guarantee usage metadata.

The model allowlist is centralized in `server/models.ts`. It currently contains
the production `llama-3.3-70b-versatile` and `llama-3.1-8b-instant` IDs listed
in [Groq's supported models documentation](https://console.groq.com/docs/models).
The server does not silently substitute a model. Update the allowlist and
limits when Groq's catalog changes.

## Render deployment

This repository includes a Render Blueprint in `render.yaml`:

1. Push the repository to GitHub and create a new Blueprint in Render.
2. Set the required `GROQ_API_KEY` secret when prompted.
3. Deploy. The blueprint runs `npm ci --include=dev && npm run build`, then
   starts the compiled Express server with `npm run start:prod`.
4. Render provides the `PORT`; `/api/health` is configured as the health check.

For a manually configured Render Web Service, use:

- **Build command:** `npm ci --include=dev && npm run build`
- **Start command:** `npm run start:prod`
- **Environment:** `GROQ_API_KEY` (secret), `NODE_ENV=production`

Do not set a fixed `PORT` on Render. The service uses Render's assigned port.

## Data and safety

- Browser `localStorage` stores conversations, selected model, prompt, and
  appearance. Clearing site data removes them; there is no server-side history
  or database.
- Markdown is rendered by `ngx-markdown` with Angular's sanitizer enabled.
  Shiki highlighting is lazy-loaded for common languages; unknown language
  fences remain safely escaped plain text and still have a copy button.
- Markdown links open in a new tab with `noopener noreferrer`.
- The API accepts no cross-origin browser requests by default and has a
  per-IP chat-request limit. Configure a shared rate-limit store if deploying
  multiple server instances.

## Checks

```bash
npm run build
npm run typecheck:server
npm run test:server
npm test
```
