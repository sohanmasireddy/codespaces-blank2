import { DatePipe, DecimalPipe } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  HostListener,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { bufferTime, filter, Subscription } from 'rxjs';
import { ChatMessage, Conversation, ModelInfo, StreamEvent } from '../models/chat.models';
import { ChatApiService } from '../services/chat-api.service';
import { ChatStateService } from '../services/chat-state.service';
import { ShikiHighlightDirective } from '../directives/shiki-highlight.directive';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    CdkTrapFocus,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    TextFieldModule,
    NgIcon,
    RouterLink,
    MarkdownComponent,
    ShikiHighlightDirective,
  ],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage implements OnInit, OnDestroy {
  readonly state = inject(ChatStateService);
  private readonly api = inject(ChatApiService);

  @ViewChild('messageScroll') private messageScroll?: ElementRef<HTMLElement>;
  @ViewChild('composer') private composer?: ElementRef<HTMLTextAreaElement>;

  readonly models = signal<ModelInfo[]>([]);
  readonly modelLoadError = signal('');
  readonly errorMessage = signal('');
  readonly draft = signal('');
  readonly searchQuery = signal('');
  readonly settingsOpen = signal(false);
  readonly sidebarExpanded = signal(true);
  readonly mobileSidebarOpen = signal(false);
  readonly isGenerating = signal(false);
  readonly renamingId = signal<string | null>(null);
  readonly renameDraft = signal('');
  readonly confirmClearHistory = signal(false);
  readonly chatGroups = computed(() => this.state.groupedConversations(this.searchQuery()));
  readonly selectedModel = computed(
    () => this.models().find((model) => model.id === this.state.settings().model) ?? null,
  );

  private generationSubscription?: Subscription;
  private currentAssistantMessageId?: string;
  private currentConversationId?: string;
  private stopping = false;

  ngOnInit(): void {
    this.api.getModels().subscribe({
      next: (models) => {
        this.models.set(models);
        if (!models.some((model) => model.id === this.state.settings().model)) {
          this.modelLoadError.set(
            `The saved model “${this.state.settings().model}” is not in the server’s current model list. Choose an available model in settings.`,
          );
        }
      },
      error: () => {
        this.modelLoadError.set(
          'Could not load the Groq model list. Check that the server is running, then refresh.',
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.generationSubscription?.unsubscribe();
  }

  @HostListener('document:keydown', ['$event'])
  handleGlobalKeydown(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.sidebarExpanded.set(true);
      requestAnimationFrame(() =>
        document.querySelector<HTMLInputElement>('.search-box input')?.focus(),
      );
    }
    if (event.key === 'Escape') {
      if (this.settingsOpen()) this.settingsOpen.set(false);
      if (this.mobileSidebarOpen()) this.mobileSidebarOpen.set(false);
    }
  }

  newChat(): void {
    this.errorMessage.set('');
    this.state.createConversation();
    this.mobileSidebarOpen.set(false);
    this.focusComposer();
  }

  selectConversation(id: string): void {
    this.state.selectConversation(id);
    this.errorMessage.set('');
    this.mobileSidebarOpen.set(false);
    this.scrollToBottom(true);
  }

  send(): void {
    const content = this.draft().trim();
    if (!content || this.isGenerating()) return;

    let conversation = this.state.activeConversation();
    if (!conversation) conversation = this.state.createConversation();
    const now = new Date().toISOString();
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      createdAt: now,
    };
    this.state.addMessage(conversation.id, userMessage);
    this.draft.set('');
    this.errorMessage.set('');
    this.scrollToBottom(true);
    this.startGeneration(conversation.id, [
      ...conversation.messages.map(({ role, content: text }) => ({
        role,
        content: text,
      })),
      { role: 'user', content },
    ]);
  }

  stopGeneration(): void {
    if (!this.generationSubscription) return;
    this.stopping = true;
    this.generationSubscription.unsubscribe();
    this.generationSubscription = undefined;
    this.isGenerating.set(false);
    if (this.currentAssistantMessageId) {
      const conversationId = this.currentConversationId;
      const message = this.state
        .conversations()
        .find((conversation) => conversation.id === conversationId)
        ?.messages.find((item) => item.id === this.currentAssistantMessageId);
      if (conversationId && message && !message.content) {
        this.state.removeMessage(conversationId, message.id);
      }
    }
    this.currentAssistantMessageId = undefined;
    this.currentConversationId = undefined;
    this.stopping = false;
  }

  regenerate(): void {
    if (this.isGenerating()) return;
    const conversation = this.state.activeConversation();
    if (!conversation) return;
    let lastUserIndex = -1;
    for (let index = conversation.messages.length - 1; index >= 0; index--) {
      if (conversation.messages[index]?.role === 'user') {
        lastUserIndex = index;
        break;
      }
    }
    if (lastUserIndex < 0) return;
    const messages = conversation.messages.slice(0, lastUserIndex + 1);
    this.state.replaceMessages(conversation.id, messages);
    this.errorMessage.set('');
    this.startGeneration(
      conversation.id,
      messages.map(({ role, content }) => ({ role, content })),
    );
    this.scrollToBottom(true);
  }

  handleComposerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      this.send();
    }
  }

  onModelChange(modelId: string): void {
    const model = this.models().find((item) => item.id === modelId);
    if (!model) return;
    this.state.updateSettings({
      model: modelId,
      maxTokens: Math.min(this.state.settings().maxTokens, model.maxCompletionTokens),
    });
    this.modelLoadError.set('');
  }

  renameConversation(id: string, title: string): void {
    this.renamingId.set(id);
    this.renameDraft.set(title);
  }

  saveRename(id: string): void {
    if (this.renamingId() !== id) return;
    this.state.renameConversation(id, this.renameDraft());
    this.renamingId.set(null);
  }

  cancelRename(event: Event): void {
    event.preventDefault();
    this.renamingId.set(null);
  }

  deleteConversation(id: string, event: Event): void {
    event.stopPropagation();
    this.state.deleteConversation(id);
  }

  copyMessage(message: ChatMessage): void {
    void this.writeClipboard(message.content, 'Could not copy the response.');
  }

  copyCode(event: MouseEvent): void {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>('[data-copy-code]');
    if (!button) return;
    const code = button.closest('.code-block')?.querySelector('pre code')?.textContent;
    if (code === undefined) return;
    void this.writeClipboard(code, 'Could not copy code.', () => {
      button.textContent = 'Copied';
      window.setTimeout(() => (button.textContent = 'Copy'), 1400);
    });
  }

  toggleTheme(theme: 'system' | 'light' | 'dark'): void {
    this.state.updateSettings({ theme });
  }

  setTemperature(value: string): void {
    const temperature = Number(value);
    if (Number.isFinite(temperature)) {
      this.state.updateSettings({ temperature: Math.max(0, Math.min(2, temperature)) });
    }
  }

  setMaxTokens(value: string): void {
    const max = this.selectedModel()?.maxCompletionTokens ?? 32_768;
    const tokens = Number(value);
    if (Number.isFinite(tokens)) {
      this.state.updateSettings({
        maxTokens: Math.max(1, Math.min(max, Math.floor(tokens))),
      });
    }
  }

  clearHistory(): void {
    this.state.clearConversations();
    this.confirmClearHistory.set(false);
    this.errorMessage.set('');
  }

  submitSuggestion(prompt: string): void {
    this.draft.set(prompt);
    this.send();
  }

  isLastAssistant(message: ChatMessage): boolean {
    if (message.role !== 'assistant') return false;
    const messages = this.state.activeConversation()?.messages ?? [];
    return [...messages].reverse().find((item) => item.role === 'assistant')?.id === message.id;
  }

  isStreamingMessage(message: ChatMessage): boolean {
    return this.isGenerating() && message.id === this.currentAssistantMessageId;
  }

  private startGeneration(
    conversationId: string,
    messages: Array<{ role: 'user' | 'assistant'; content: string }>,
  ): void {
    const model = this.selectedModel();
    if (!model) {
      this.errorMessage.set('Select an available Groq model in settings before sending a message.');
      return;
    }

    const settings = this.state.settings();
    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: '',
      createdAt: new Date().toISOString(),
    };
    this.currentAssistantMessageId = assistantMessage.id;
    this.currentConversationId = conversationId;
    this.state.addMessage(conversationId, assistantMessage);
    this.isGenerating.set(true);

    const request = {
      model: model.id,
      messages,
      systemPrompt: settings.systemPrompt,
      maxTokens: Math.min(settings.maxTokens, model.maxCompletionTokens),
      ...(model.supportsTemperature ? { temperature: settings.temperature } : {}),
    };

    this.generationSubscription = this.api
      .streamChat(request)
      .pipe(
        bufferTime(40),
        filter((events) => events.length > 0),
      )
      .subscribe({
        next: (events) => this.applyStreamEvents(conversationId, assistantMessage.id, events),
        error: (error: unknown) => {
          const current = this.findMessage(conversationId, assistantMessage.id);
          if (current && !current.content) {
            this.state.removeMessage(conversationId, assistantMessage.id);
          }
          this.errorMessage.set(
            error instanceof Error ? error.message : 'The response could not be completed.',
          );
          this.finishGeneration();
        },
        complete: () => {
          const current = this.findMessage(conversationId, assistantMessage.id);
          if (current && !current.content && !this.stopping) {
            this.state.removeMessage(conversationId, assistantMessage.id);
            this.errorMessage.set('The model returned an empty response. Please try again.');
          }
          this.finishGeneration();
        },
      });
  }

  private applyStreamEvents(
    conversationId: string,
    messageId: string,
    events: StreamEvent[],
  ): void {
    let addition = '';
    let usage: ChatMessage['usage'];
    for (const event of events) {
      if (event.type === 'delta') addition += event.text;
      if (event.type === 'done') usage = event.usage;
    }
    if (addition || usage) {
      this.state.updateMessage(conversationId, messageId, (message) => ({
        ...message,
        content: message.content + addition,
        ...(usage ? { usage } : {}),
      }));
      this.scrollToBottom(false, false);
    }
  }

  private findMessage(conversationId: string, messageId: string): ChatMessage | undefined {
    return this.state
      .conversations()
      .find((conversation) => conversation.id === conversationId)
      ?.messages.find((message) => message.id === messageId);
  }

  private finishGeneration(): void {
    this.isGenerating.set(false);
    this.currentAssistantMessageId = undefined;
    this.currentConversationId = undefined;
    this.generationSubscription = undefined;
  }

  private async writeClipboard(
    text: string,
    failureMessage: string,
    onSuccess?: () => void,
  ): Promise<void> {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API is unavailable.');
      await navigator.clipboard.writeText(text);
      this.errorMessage.set('');
      onSuccess?.();
    } catch (error) {
      console.error('Clipboard copy failed.', error);
      this.errorMessage.set(`${failureMessage} Check clipboard permissions.`);
    }
  }

  private scrollToBottom(force = false, smooth = true): void {
    const element = this.messageScroll?.nativeElement;
    if (!element) return;
    const nearBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 120;
    if (!force && !nearBottom) return;
    requestAnimationFrame(() => {
      if (smooth) element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' });
      else element.scrollTop = element.scrollHeight;
    });
  }

  private focusComposer(): void {
    requestAnimationFrame(() => this.composer?.nativeElement.focus());
  }
}
