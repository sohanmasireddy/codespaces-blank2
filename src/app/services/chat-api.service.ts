import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatRequest, ModelInfo, StreamEvent, TokenUsage } from '../models/chat.models';

interface ApiStreamEvent {
  type: 'delta' | 'done' | 'error';
  text?: string;
  message?: string;
  usage?: {
    prompt_tokens?: number;
    completion_tokens?: number;
    total_tokens?: number;
  };
}

@Injectable({ providedIn: 'root' })
export class ChatApiService {
  private readonly http = inject(HttpClient);

  getModels(): Observable<ModelInfo[]> {
    return this.http.get<ModelInfo[]>('/api/models');
  }

  streamChat(request: ChatRequest): Observable<StreamEvent> {
    return new Observable<StreamEvent>((observer) => {
      const controller = new AbortController();

      const run = async (): Promise<void> => {
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request),
            signal: controller.signal,
          });

          if (!response.ok) {
            const body: { error?: string; issues?: Array<{ message?: string }> } = await response
              .json()
              .catch(() => ({}));
            throw new Error(
              body.issues?.[0]?.message ||
                body.error ||
                `The chat request failed (${response.status}).`,
            );
          }
          if (!response.body) {
            throw new Error('The server did not provide a response stream.');
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buffer = '';
          while (true) {
            const { value, done } = await reader.read();
            buffer += decoder.decode(value, { stream: !done });
            let boundary = /\r?\n\r?\n/.exec(buffer);
            while (boundary) {
              const frame = buffer.slice(0, boundary.index);
              buffer = buffer.slice(boundary.index + boundary[0].length);
              this.consumeFrame(frame, observer);
              boundary = /\r?\n\r?\n/.exec(buffer);
            }
            if (done) break;
          }
          if (buffer.trim()) this.consumeFrame(buffer, observer);
          observer.complete();
        } catch (error) {
          if (controller.signal.aborted) {
            observer.complete();
          } else {
            observer.error(
              error instanceof Error ? error : new Error('The stream ended unexpectedly.'),
            );
          }
        }
      };

      void run();
      return () => controller.abort();
    });
  }

  private consumeFrame(frame: string, observer: import('rxjs').Subscriber<StreamEvent>): void {
    const data = frame
      .split(/\r?\n/)
      .filter((line) => line.startsWith('data:'))
      .map((line) => line.slice(5).trimStart())
      .join('\n');
    if (!data || data === '[DONE]') return;

    let event: ApiStreamEvent;
    try {
      event = JSON.parse(data) as ApiStreamEvent;
    } catch {
      throw new Error('The server returned an invalid streaming event.');
    }

    if (event.type === 'error') {
      throw new Error(event.message || 'The model could not complete this response.');
    }
    if (event.type === 'delta' && typeof event.text === 'string') {
      observer.next({ type: 'delta', text: event.text });
    } else if (event.type === 'done') {
      const usage = event.usage ? this.toUsage(event.usage) : undefined;
      observer.next({ type: 'done', usage });
    }
  }

  private toUsage(usage: NonNullable<ApiStreamEvent['usage']>): TokenUsage {
    return {
      promptTokens: usage.prompt_tokens ?? 0,
      completionTokens: usage.completion_tokens ?? 0,
      totalTokens: usage.total_tokens ?? 0,
    };
  }
}
