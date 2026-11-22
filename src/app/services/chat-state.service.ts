import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ChatMessage, ChatSettings, Conversation, ConversationGroup } from '../models/chat.models';

const CONVERSATIONS_KEY = 'groq-chat.conversations';
const ACTIVE_CHAT_KEY = 'groq-chat.activeConversation';
const SETTINGS_KEY = 'groq-chat.settings';

const DEFAULT_SETTINGS: ChatSettings = {
  model: 'llama-3.3-70b-versatile',
  systemPrompt: 'You are a helpful assistant.',
  temperature: 0.7,
  maxTokens: 4096,
  theme: 'system',
};

function readStorage<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from browser storage.`, error);
    return fallback;
  }
}

function conversationIsValid(value: unknown): value is Conversation {
  if (!value || typeof value !== 'object') return false;
  const conversation = value as Partial<Conversation>;
  return (
    typeof conversation.id === 'string' &&
    typeof conversation.title === 'string' &&
    typeof conversation.createdAt === 'string' &&
    typeof conversation.updatedAt === 'string' &&
    Array.isArray(conversation.messages) &&
    conversation.messages.every(messageIsValid)
  );
}

function messageIsValid(value: unknown): value is ChatMessage {
  if (!value || typeof value !== 'object') return false;
  const message = value as Partial<ChatMessage>;
  return (
    typeof message.id === 'string' &&
    (message.role === 'user' || message.role === 'assistant') &&
    typeof message.content === 'string' &&
    typeof message.createdAt === 'string' &&
    (!message.usage ||
      (typeof message.usage.promptTokens === 'number' &&
        typeof message.usage.completionTokens === 'number' &&
        typeof message.usage.totalTokens === 'number'))
  );
}

function settingsAreValid(value: unknown): value is ChatSettings {
  if (!value || typeof value !== 'object') return false;
  const settings = value as Partial<ChatSettings>;
  return (
    typeof settings.model === 'string' &&
    typeof settings.systemPrompt === 'string' &&
    typeof settings.temperature === 'number' &&
    Number.isFinite(settings.temperature) &&
    settings.temperature >= 0 &&
    settings.temperature <= 2 &&
    typeof settings.maxTokens === 'number' &&
    Number.isInteger(settings.maxTokens) &&
    settings.maxTokens >= 1 &&
    settings.maxTokens <= 131_072 &&
    (settings.theme === 'system' || settings.theme === 'light' || settings.theme === 'dark')
  );
}

function readConversations(): Conversation[] {
  const saved = readStorage<unknown>(CONVERSATIONS_KEY, []);
  return Array.isArray(saved) ? saved.filter(conversationIsValid) : [];
}

function readActiveConversationId(): string | null {
  const saved = readStorage<unknown>(ACTIVE_CHAT_KEY, null);
  return typeof saved === 'string' ? saved : null;
}

function titleFromMessage(content: string): string {
  const title = content.trim().replace(/\s+/g, ' ');
  return title.length > 48 ? `${title.slice(0, 47).trimEnd()}…` : title || 'New chat';
}

function groupTitle(dateValue: string): string {
  const date = new Date(dateValue);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const messageDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const daysAgo = Math.floor((today - messageDay) / 86_400_000);
  if (daysAgo <= 0) return 'Today';
  if (daysAgo === 1) return 'Yesterday';
  if (daysAgo < 7) return 'Previous 7 days';
  if (daysAgo < 30) return 'Previous 30 days';
  return 'Older';
}

@Injectable({ providedIn: 'root' })
export class ChatStateService {
  private readonly document = inject(DOCUMENT);
  private persistTimer?: ReturnType<typeof setTimeout>;

  readonly conversations = signal(readConversations());
  readonly activeConversationId = signal(readActiveConversationId());
  readonly settings = signal<ChatSettings>(
    (() => {
      const value = readStorage<unknown>(SETTINGS_KEY, DEFAULT_SETTINGS);
      return settingsAreValid(value) ? value : DEFAULT_SETTINGS;
    })(),
  );
  readonly activeConversation = computed(
    () =>
      this.conversations().find(
        (conversation) => conversation.id === this.activeConversationId(),
      ) ?? null,
  );

  constructor() {
    effect(() => {
      const theme = this.settings().theme;
      if (theme === 'system') {
        this.document.documentElement.removeAttribute('data-theme');
      } else {
        this.document.documentElement.setAttribute('data-theme', theme);
      }
    });
  }

  createConversation(): Conversation {
    const now = new Date().toISOString();
    const conversation: Conversation = {
      id: crypto.randomUUID(),
      title: 'New chat',
      createdAt: now,
      updatedAt: now,
      messages: [],
    };
    this.conversations.update((current) => [conversation, ...current]);
    this.selectConversation(conversation.id);
    this.persistConversations();
    return conversation;
  }

  selectConversation(id: string | null): void {
    this.activeConversationId.set(id);
    try {
      if (id) localStorage.setItem(ACTIVE_CHAT_KEY, id);
      else localStorage.removeItem(ACTIVE_CHAT_KEY);
    } catch (error) {
      console.error('Unable to persist the active conversation.', error);
    }
  }

  addMessage(conversationId: string, message: ChatMessage): void {
    this.conversations.update((conversations) =>
      conversations.map((conversation) => {
        if (conversation.id !== conversationId) return conversation;
        const messages = [...conversation.messages, message];
        const title =
          conversation.title === 'New chat' && message.role === 'user'
            ? titleFromMessage(message.content)
            : conversation.title;
        return { ...conversation, title, messages, updatedAt: message.createdAt };
      }),
    );
    this.persistConversations();
  }

  updateMessage(
    conversationId: string,
    messageId: string,
    update: (message: ChatMessage) => ChatMessage,
  ): void {
    this.conversations.update((conversations) =>
      conversations.map((conversation) => {
        if (conversation.id !== conversationId) return conversation;
        return {
          ...conversation,
          updatedAt: new Date().toISOString(),
          messages: conversation.messages.map((message) =>
            message.id === messageId ? update(message) : message,
          ),
        };
      }),
    );
    this.schedulePersist();
  }

  replaceMessages(conversationId: string, messages: ChatMessage[]): void {
    this.conversations.update((conversations) =>
      conversations.map((conversation) =>
        conversation.id === conversationId
          ? { ...conversation, messages, updatedAt: new Date().toISOString() }
          : conversation,
      ),
    );
    this.persistConversations();
  }

  removeMessage(conversationId: string, messageId: string): void {
    this.conversations.update((conversations) =>
      conversations.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              messages: conversation.messages.filter((message) => message.id !== messageId),
            }
          : conversation,
      ),
    );
    this.persistConversations();
  }

  renameConversation(id: string, title: string): void {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    this.conversations.update((conversations) =>
      conversations.map((conversation) =>
        conversation.id === id
          ? { ...conversation, title: titleFromMessage(cleanTitle) }
          : conversation,
      ),
    );
    this.persistConversations();
  }

  deleteConversation(id: string): void {
    const remaining = this.conversations().filter((conversation) => conversation.id !== id);
    this.conversations.set(remaining);
    if (this.activeConversationId() === id) {
      this.selectConversation(remaining[0]?.id ?? null);
    }
    this.persistConversations();
  }

  clearConversations(): void {
    this.conversations.set([]);
    this.selectConversation(null);
    this.persistConversations();
  }

  updateSettings(patch: Partial<ChatSettings>): void {
    this.settings.update((settings) => ({ ...settings, ...patch }));
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings()));
    } catch (error) {
      console.error('Unable to persist chat settings.', error);
    }
  }

  groupedConversations(query: string): ConversationGroup[] {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const groups = new Map<string, Conversation[]>();
    for (const conversation of [...this.conversations()].sort((a, b) =>
      b.updatedAt.localeCompare(a.updatedAt),
    )) {
      if (
        normalizedQuery &&
        !conversation.title.toLocaleLowerCase().includes(normalizedQuery) &&
        !conversation.messages.some((message) =>
          message.content.toLocaleLowerCase().includes(normalizedQuery),
        )
      ) {
        continue;
      }
      const title = groupTitle(conversation.updatedAt);
      groups.set(title, [...(groups.get(title) ?? []), conversation]);
    }
    return [...groups].map(([title, conversations]) => ({ title, conversations }));
  }

  private persistConversations(): void {
    if (this.persistTimer) clearTimeout(this.persistTimer);
    try {
      localStorage.setItem(CONVERSATIONS_KEY, JSON.stringify(this.conversations()));
    } catch (error) {
      console.error('Unable to persist conversation history.', error);
    }
  }

  private schedulePersist(): void {
    if (this.persistTimer) clearTimeout(this.persistTimer);
    this.persistTimer = setTimeout(() => this.persistConversations(), 300);
  }
}
