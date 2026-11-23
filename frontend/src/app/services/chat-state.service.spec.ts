import { TestBed } from '@angular/core/testing';
import { ChatMessage } from '../models/chat.models';
import { ChatStateService } from './chat-state.service';

describe('ChatStateService', () => {
  let state: ChatStateService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [ChatStateService] });
    state = TestBed.inject(ChatStateService);
  });

  afterEach(() => localStorage.clear());

  it('titles and persists a conversation from its first user message', () => {
    const conversation = state.createConversation();
    const message: ChatMessage = {
      id: 'message-1',
      role: 'user',
      content: 'Explain TypeScript signals',
      createdAt: new Date().toISOString(),
    };

    state.addMessage(conversation.id, message);

    expect(state.activeConversation()?.title).toBe('Explain TypeScript signals');
    expect(localStorage.getItem('groq-chat.activeConversation')).toBe(conversation.id);
    const saved = JSON.parse(localStorage.getItem('groq-chat.conversations') ?? '[]');
    expect(saved[0].messages[0].content).toBe(message.content);
  });

  it('filters chat history by message content and selects a remaining chat after deletion', () => {
    const older = state.createConversation();
    state.addMessage(older.id, {
      id: 'message-1',
      role: 'user',
      content: 'Find my TypeScript notes',
      createdAt: new Date().toISOString(),
    });
    const active = state.createConversation();

    expect(state.groupedConversations('typescript')).toHaveLength(1);
    state.deleteConversation(active.id);

    expect(state.activeConversationId()).toBe(older.id);
    expect(state.activeConversation()?.title).toBe('Find my TypeScript notes');
  });

  it('defaults the thinking level when loading older saved settings', () => {
    localStorage.setItem(
      'groq-chat.settings',
      JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        systemPrompt: 'Keep my saved prompt',
        temperature: 0.4,
        maxTokens: 2000,
        theme: 'dark',
      }),
    );
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ providers: [ChatStateService] });
    state = TestBed.inject(ChatStateService);

    expect(state.settings().thinkingLevel).toBe('medium');
    expect(state.settings().systemPrompt).toBe('Keep my saved prompt');
  });
});
