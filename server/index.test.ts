import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import { app } from './index.js';

let server: Server;
let baseUrl: string;
const previousApiKey = process.env['GROQ_API_KEY'];

before(async () => {
  server = app.listen(0, '127.0.0.1');
  await new Promise<void>((resolve) => server.once('listening', resolve));
  const address = server.address();
  assert.ok(address && typeof address !== 'string');
  baseUrl = `http://127.0.0.1:${(address as AddressInfo).port}`;
});

after(async () => {
  if (previousApiKey === undefined) delete process.env['GROQ_API_KEY'];
  else process.env['GROQ_API_KEY'] = previousApiKey;
  await new Promise<void>((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
});

test('health endpoint responds without exposing configuration', async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok' });
});

test('model endpoint returns only the configured production models', async () => {
  const response = await fetch(`${baseUrl}/api/models`);
  assert.equal(response.status, 200);
  const models: Array<{ id: string }> = await response.json();
  assert.deepEqual(
    models.map((model) => model.id),
    ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'],
  );
});

test('chat endpoint rejects unlisted models before contacting Groq', async () => {
  const response = await fetch(`${baseUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'not-a-groq-model',
      messages: [{ role: 'user', content: 'hello' }],
      systemPrompt: '',
      maxTokens: 100,
    }),
  });
  assert.equal(response.status, 400);
  assert.deepEqual((await response.json()).error, 'Invalid chat request.');
});

test('valid chat requests report missing server credentials without calling Groq', async () => {
  delete process.env['GROQ_API_KEY'];
  const response = await fetch(`${baseUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: 'hello' }],
      systemPrompt: 'You are a helpful assistant.',
      temperature: 0.7,
      maxTokens: 100,
    }),
  });
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /GROQ_API_KEY/);
});
