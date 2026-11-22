import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express, { type ErrorRequestHandler, type Request, type Response } from 'express';
import { rateLimit } from 'express-rate-limit';
import Groq from 'groq-sdk';
import { z } from 'zod';
import { getModel, MODEL_IDS, MODELS } from './models.js';

const projectDirectory = process.cwd();
const frontendDirectory = path.join(projectDirectory, 'dist', 'groq-chat', 'browser');
const frontendIndex = path.join(frontendDirectory, 'index.html');

const chatRequestSchema = z
  .object({
    model: z.enum(MODEL_IDS),
    messages: z
      .array(
        z.object({
          role: z.enum(['user', 'assistant']),
          content: z.string().min(1).max(100_000),
        }),
      )
      .min(1, 'At least one message is required.')
      .max(
        80,
        'Conversation contains too many messages. Start a new chat or remove earlier messages.',
      ),
    systemPrompt: z.string().max(8_000),
    temperature: z.number().min(0).max(2).optional(),
    maxTokens: z.number().int().min(1).max(131_072),
  })
  .strict()
  .superRefine((request, context) => {
    const totalCharacters =
      request.systemPrompt.length +
      request.messages.reduce((total, message) => total + message.content.length, 0);
    if (totalCharacters > 100_000) {
      context.addIssue({
        code: 'custom',
        message: 'Conversation is too long. Start a new chat or remove earlier messages.',
        path: ['messages'],
      });
    }

    const model = getModel(request.model);
    if (model && request.maxTokens > model.maxCompletionTokens) {
      context.addIssue({
        code: 'custom',
        message: `maxTokens exceeds ${model.id}'s ${model.maxCompletionTokens}-token output limit.`,
        path: ['maxTokens'],
      });
    }
    if (model && request.temperature !== undefined && !model.supportsTemperature) {
      context.addIssue({
        code: 'custom',
        message: `Temperature is not supported by ${model.id}.`,
        path: ['temperature'],
      });
    }
  });

function sendEvent(
  response: Response,
  event:
    | { type: 'delta'; text: string }
    | { type: 'done'; usage?: unknown }
    | { type: 'error'; message: string },
): void {
  response.write(`data: ${JSON.stringify(event)}\n\n`);
}

function getErrorStatus(error: unknown): number | undefined {
  if (error && typeof error === 'object' && 'status' in error && typeof error.status === 'number') {
    return error.status;
  }
  return undefined;
}

function getClientErrorMessage(status: number | undefined): string {
  if (status === 401 || status === 403) {
    return 'Groq rejected the server credentials. Check the GROQ_API_KEY configuration.';
  }
  if (status === 404) {
    return 'Groq no longer recognizes this model. Choose another available model in settings.';
  }
  if (status === 429) {
    return 'Groq rate limit or usage quota reached. Please wait and try again.';
  }
  if (status === undefined) {
    return 'The Groq request timed out or the connection was interrupted. Please try again.';
  }
  if (status && status >= 500) {
    return 'Groq is temporarily unavailable. Please try again shortly.';
  }
  return 'The Groq request failed. Check your model settings and try again.';
}

export function createApp(): express.Express {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);
  app.use((_request, response, next) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('X-Frame-Options', 'DENY');
    response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
  });
  app.use(express.json({ limit: '256kb' }));

  app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok' });
  });

  app.get('/api/models', (_request, response) => {
    response.json(MODELS);
  });

  const chatLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { error: 'Too many chat requests. Please wait before trying again.' },
  });

  app.post(
    '/api/chat',
    chatLimiter,
    async (request: Request, response: Response): Promise<void> => {
      const parsed = chatRequestSchema.safeParse(request.body);
      if (!parsed.success) {
        response.status(400).json({
          error: 'Invalid chat request.',
          issues: parsed.error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        });
        return;
      }

      const apiKey = process.env['GROQ_API_KEY'];
      if (!apiKey) {
        response.status(503).json({
          error:
            'Groq is not configured on this server. Set the GROQ_API_KEY environment variable.',
        });
        return;
      }

      const model = getModel(parsed.data.model);
      if (!model) {
        response.status(400).json({ error: 'The selected model is not available.' });
        return;
      }

      const controller = new AbortController();
      const onClose = (): void => {
        if (!response.writableEnded) controller.abort();
      };
      response.once('close', onClose);
      response.status(200).set({
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no',
      });
      response.flushHeaders();

      try {
        const client = new Groq({ apiKey, timeout: 120_000, maxRetries: 0 });
        const stream = await client.chat.completions.create(
          {
            model: model.id,
            messages: [
              { role: 'system', content: parsed.data.systemPrompt },
              ...parsed.data.messages,
            ],
            max_completion_tokens: parsed.data.maxTokens,
            ...(model.supportsTemperature && parsed.data.temperature !== undefined
              ? { temperature: parsed.data.temperature }
              : {}),
            stream: true,
          },
          { signal: controller.signal },
        );

        for await (const chunk of stream) {
          if (controller.signal.aborted) break;
          const text = chunk.choices[0]?.delta.content;
          if (typeof text === 'string' && text.length > 0) {
            sendEvent(response, { type: 'delta', text });
          }
        }
        if (!controller.signal.aborted) sendEvent(response, { type: 'done' });
      } catch (error) {
        if (!controller.signal.aborted) {
          const status = getErrorStatus(error);
          console.error('Groq streaming request failed.', { status });
          sendEvent(response, {
            type: 'error',
            message: getClientErrorMessage(status),
          });
        }
      } finally {
        response.off('close', onClose);
        if (!response.writableEnded) response.end();
      }
    },
  );

  app.use('/api', (_request, response) => {
    response.status(404).json({ error: 'API route not found.' });
  });

  if (existsSync(frontendIndex)) {
    app.use(
      express.static(frontendDirectory, {
        index: false,
        maxAge: process.env['NODE_ENV'] === 'production' ? '1h' : 0,
        setHeaders: (response, filePath) => {
          if (filePath.endsWith('index.html')) response.setHeader('Cache-Control', 'no-cache');
        },
      }),
    );
    app.get('/{*path}', (request, response) => {
      if (!request.accepts('html')) {
        response.status(404).end();
        return;
      }
      response.sendFile(frontendIndex);
    });
  } else {
    app.get('/{*path}', (_request, response) => {
      response.status(503).json({
        error:
          'Frontend build is missing. Run npm run build before starting the production server.',
      });
    });
  }

  const errorHandler: ErrorRequestHandler = (error, _request, response, next) => {
    if (response.headersSent) {
      next(error);
      return;
    }
    const status =
      error && typeof error === 'object' && 'status' in error && typeof error.status === 'number'
        ? error.status
        : 500;
    response.status(status).json({
      error:
        status === 413
          ? 'Request body is too large.'
          : status === 400
            ? 'Request body is not valid JSON.'
            : 'An unexpected server error occurred.',
    });
  };
  app.use(errorHandler);
  return app;
}

export const app = createApp();

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env['PORT'] ?? 3000);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Groq Chat server listening on port ${port}.`);
  });
}
