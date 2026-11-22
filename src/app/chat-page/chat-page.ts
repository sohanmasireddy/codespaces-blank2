import {
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NgIcon } from '@ng-icons/core';
import { MarkdownComponent } from 'ngx-markdown';
import { bufferTime, filter, Subscription } from 'rxjs';
import { ChatMessage, ModelInfo, StreamEvent, ThinkingLevel } from '../models/chat.models';
import { ChatApiService } from '../services/chat-api.service';
import { ChatStateService } from '../services/chat-state.service';
import { ShikiHighlightDirective } from '../directives/shiki-highlight.directive';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 5;
const MAX_ATTACHMENT_TEXT = 40_000;
const TEXT_FILE_EXTENSIONS = new Set([
  'c',
  'cc',
  'cpp',
  'cs',
  'css',
  'csv',
  'go',
  'h',
  'html',
  'java',
  'js',
  'json',
  'jsx',
  'kt',
  'log',
  'md',
  'mjs',
  'php',
  'py',
  'rb',
  'rs',
  'sh',
  'sql',
  'svg',
  'swift',
  'ts',
  'tsx',
  'txt',
  'xml',
  'yaml',
  'yml',
]);

function fileExtension(file: File): string {
  return file.name.split('.').pop()?.toLowerCase() ?? '';
}

function isTextFile(file: File): boolean {
  return TEXT_FILE_EXTENSIONS.has(fileExtension(file));
}

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    FormsModule,
    NgTemplateOutlet,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    TextFieldModule,
    NgIcon,
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

  readonly models = signal<ModelInfo[]>([]);
  readonly errorMessage = signal('');
  readonly draft = signal('');
  readonly attachments = signal<File[]>([]);
  readonly isReadingFiles = signal(false);
  readonly isGenerating = signal(false);
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
          const firstModel = models[0];
          if (firstModel) {
            this.state.updateSettings({
              model: firstModel.id,
              maxTokens: Math.min(this.state.settings().maxTokens, firstModel.maxCompletionTokens),
            });
          }
        }
      },
      error: () => {
        this.errorMessage.set(
          'Could not load the GPT-OSS models. Check that the server is running.',
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.generationSubscription?.unsubscribe();
  }

  async send(): Promise<void> {
    if (this.isGenerating() || this.isReadingFiles()) return;
    const prompt = this.draft().trim();
    const files = this.attachments();
    if (!prompt && files.length === 0) return;

    this.isReadingFiles.set(true);
    this.errorMessage.set('');
    let content: string;
    try {
      content = await this.prepareMessage(prompt, files);
    } catch (error) {
      this.errorMessage.set(
        error instanceof Error ? error.message : 'Could not read one of the selected files.',
      );
      this.isReadingFiles.set(false);
      return;
    }
    this.isReadingFiles.set(false);

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
    this.attachments.set([]);
    this.scrollToBottom(true);
    this.startGeneration(conversation.id, [
      ...conversation.messages.map(({ role, content: text }) => ({
        role,
        content: text,
      })),
      { role: 'user', content },
    ]);
  }

  private async prepareMessage(prompt: string, files: File[]): Promise<string> {
    if (files.length === 0) return prompt;
    const parts: string[] = [];
    let remaining = MAX_ATTACHMENT_TEXT;
    for (const file of files) {
      if (remaining <= 0) {
        throw new Error(
          `Attachments exceed ${MAX_ATTACHMENT_TEXT.toLocaleString()} characters. Split them across messages.`,
        );
      }
      const text = await this.extractFileText(file);
      const content = text.trim();
      if (!content) throw new Error(`No readable text was found in ${file.name}.`);
      if (content.length > remaining) {
        throw new Error(
          `Attachments exceed ${MAX_ATTACHMENT_TEXT.toLocaleString()} characters. Split them across messages.`,
        );
      }
      parts.push(`--- ${file.name} ---\n${content}`);
      remaining -= content.length;
    }
    return [prompt, parts.join('\n\n')].filter(Boolean).join('\n\n');
  }

  private async extractFileText(file: File): Promise<string> {
    const extension = fileExtension(file);
    if (isTextFile(file)) return file.text();
    if (extension === 'docx') {
      const mammoth = await import('mammoth');
      const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
      return result.value;
    }
    if (extension === 'pdf') {
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = '/assets/pdfjs/pdf.worker.min.mjs';
      const loadingTask = pdfjs.getDocument({ data: await file.arrayBuffer() });
      try {
        const pdf = await loadingTask.promise;
        const pages: string[] = [];
        let length = 0;
        for (
          let pageNumber = 1;
          pageNumber <= pdf.numPages && length < MAX_ATTACHMENT_TEXT;
          pageNumber++
        ) {
          const page = await pdf.getPage(pageNumber);
          const content = await page.getTextContent();
          const text = content.items
            .map((item) => ('str' in item ? item.str : ''))
            .filter(Boolean)
            .join(' ');
          pages.push(text);
          length += text.length;
        }
        return pages.join('\n');
      } finally {
        await loadingTask.destroy();
      }
    }
    throw new Error(`Unsupported file type: ${file.name}. Add a text, code, PDF, or DOCX file.`);
  }

  addFiles(event: Event): void {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    this.errorMessage.set('');
    const selected = Array.from(input.files ?? []);
    input.value = '';
    const next = [...this.attachments()];
    for (const file of selected) {
      if (!isTextFile(file) && !['pdf', 'docx'].includes(fileExtension(file))) {
        this.errorMessage.set(
          `Unsupported file type: ${file.name}. Add text, code, PDF, or DOCX files.`,
        );
        continue;
      }
      if (file.size > MAX_FILE_SIZE) {
        this.errorMessage.set(`${file.name} is larger than the 5 MB per-file limit.`);
        continue;
      }
      if (next.length >= MAX_FILES) {
        this.errorMessage.set(`You can attach up to ${MAX_FILES} files at a time.`);
        break;
      }
      next.push(file);
    }
    this.attachments.set(next);
  }

  removeFile(index: number): void {
    this.attachments.update((files) => files.filter((_, fileIndex) => fileIndex !== index));
  }

  onModelChange(modelId: string): void {
    const model = this.models().find((item) => item.id === modelId);
    if (!model) return;
    this.state.updateSettings({
      model: modelId,
      maxTokens: Math.min(this.state.settings().maxTokens, model.maxCompletionTokens),
    });
  }

  onThinkingLevelChange(value: string): void {
    if (value === 'low' || value === 'medium' || value === 'high') {
      this.state.updateSettings({ thinkingLevel: value });
    }
  }

  handleComposerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      void this.send();
    }
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
      this.errorMessage.set('Select an available model before sending a message.');
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
      ...(model.supportsReasoning ? { reasoningEffort: settings.thinkingLevel } : {}),
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
}
