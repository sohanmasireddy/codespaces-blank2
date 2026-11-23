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
import {
  LucideAlertCircle,
  LucideArrowUp,
  LucideCopy,
  LucideGlobe,
  LucideLoaderCircle,
  LucidePlus,
  LucideRotateCcw,
  LucideSquare,
  LucideX,
} from '@lucide/angular';
import { MarkdownComponent } from 'ngx-markdown';
import { bufferTime, filter, firstValueFrom, Subscription } from 'rxjs';
import Uppy from '@uppy/core';
import { tool } from 'ai';
import { z } from 'zod';
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
    LucideAlertCircle,
    LucideArrowUp,
    LucideCopy,
    LucideGlobe,
    LucideLoaderCircle,
    LucidePlus,
    LucideRotateCcw,
    LucideSquare,
    LucideX,
    MarkdownComponent,
    ShikiHighlightDirective,
  ],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage implements OnInit, OnDestroy {
  readonly state = inject(ChatStateService);
  private readonly api = inject(ChatApiService);

  @ViewChild('messageScroll') private messageScroll?: ElementRef<HTMLDivElement>;

  readonly models = signal<ModelInfo[]>([]);
  readonly errorMessage = signal('');
  readonly draft = signal('');
  readonly attachments = signal<File[]>([]);
  readonly isReadingFiles = signal(false);
  readonly isGenerating = signal(false);
  readonly webSearchEnabled = signal(false);
  readonly selectedModel = computed(
    () => this.models().find((model) => model.id === this.state.settings().model) ?? null,
  );

  private generationSubscription?: Subscription;
  private currentAssistantMessageId?: string;
  private currentConversationId?: string;
  private stopping = false;

  readonly webSearchTool = tool({
    description: 'Search the web and return supporting sources.',
    inputSchema: z.object({ query: z.string().min(1).max(500) }),
    execute: async ({ query }) => firstValueFrom(this.api.search(query)),
  });

  ngOnInit(): void {
    void import('motion').then(({ animate }) => {
      animate('.landing, .composer-area', { opacity: [0, 1], y: [8, 0] }, { duration: 0.35 });
    });
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

    let searchContext = '';
    if (this.webSearchEnabled()) {
      try {
        const searchQuery = prompt || content.slice(0, 500);
        const response = await firstValueFrom(this.api.search(searchQuery));
        if (response.results.length) {
          searchContext =
            'Use the following Exa search results as supporting sources. Cite links by title and URL when relevant:\n\n' +
            response.results
              .map(
                (result, index) =>
                  `${index + 1}. ${result.title}\n${result.snippet}\n${result.url}`,
              )
              .join('\n\n');
        }
      } catch (error) {
        this.errorMessage.set(
          error instanceof Error ? error.message : 'Web search could not be completed.',
        );
      }
    }

    this.startGeneration(conversation.id, [
      ...conversation.messages.map(({ role, content: text }) => ({
        role,
        content: text,
      })),
      { role: 'user', content },
    ], searchContext);
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
    if (file.type.startsWith('image/') || ['png', 'jpg', 'jpeg', 'webp', 'bmp'].includes(extension)) {
      const { recognize } = await import('tesseract.js');
      const result = await recognize(file, 'eng');
      return result.data.text;
    }
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
    const uppy = new Uppy({
      restrictions: {
        maxFileSize: MAX_FILE_SIZE,
        maxNumberOfFiles: MAX_FILES,
      },
      autoProceed: false,
    });
    const next = [...this.attachments()];
    for (const file of selected) {
      const supported =
        isTextFile(file) ||
        ['pdf', 'docx'].includes(fileExtension(file)) ||
        file.type.startsWith('image/');
      if (!supported) {
        this.errorMessage.set(
          `Unsupported file type: ${file.name}. Add text, code, PDF, DOCX, or image files.`,
        );
        continue;
      }
      if (next.length >= MAX_FILES) {
        this.errorMessage.set(`You can attach up to ${MAX_FILES} files at a time.`);
        break;
      }
      try {
        uppy.addFile({ name: file.name, type: file.type, data: file, source: 'chat' });
        next.push(file);
      } catch (error) {
        this.errorMessage.set(
          error instanceof Error ? error.message : `${file.name} could not be added.`,
        );
      }
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

  switchModel(): void {
    if (this.isGenerating() || this.models().length < 2) return;
    const currentIndex = this.models().findIndex(
      (model) => model.id === this.state.settings().model,
    );
    const nextModel = this.models()[(currentIndex + 1) % this.models().length];
    if (nextModel) this.onModelChange(nextModel.id);
  }

  switchThinkingLevel(): void {
    if (this.isGenerating()) return;
    const levels: ThinkingLevel[] = ['low', 'medium', 'high'];
    const currentIndex = levels.indexOf(this.state.settings().thinkingLevel);
    this.onThinkingLevelChange(levels[(currentIndex + 1) % levels.length]);
  }

  toggleWebSearch(): void {
    this.webSearchEnabled.update((enabled) => !enabled);
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
    searchContext = '',
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
      systemPrompt: searchContext
        ? `${settings.systemPrompt}\n\n${searchContext}`
        : settings.systemPrompt,
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
      element.scrollTo({ top: element.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
    });
  }
}
