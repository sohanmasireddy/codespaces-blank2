export type MessageRole = 'user' | 'assistant';
export type ThemePreference = 'system' | 'light' | 'dark';

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
  usage?: TokenUsage;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messages: ChatMessage[];
}

export interface ModelInfo {
  id: string;
  label: string;
  contextWindow: number;
  maxCompletionTokens: number;
  supportsTemperature: boolean;
}

export interface ChatSettings {
  model: string;
  systemPrompt: string;
  temperature: number;
  maxTokens: number;
  theme: ThemePreference;
}

export interface ChatRequest {
  model: string;
  messages: Array<Pick<ChatMessage, 'role' | 'content'>>;
  systemPrompt: string;
  temperature?: number;
  maxTokens: number;
}

export type StreamEvent =
  | { type: 'delta'; text: string }
  | { type: 'done'; usage?: TokenUsage }
  | { type: 'error'; message: string };

export interface ConversationGroup {
  title: string;
  conversations: Conversation[];
}
