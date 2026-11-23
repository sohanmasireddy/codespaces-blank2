import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, OnDestroy } from '@angular/core';
import type { HighlighterCore, LanguageInput } from 'shiki/core';
import DOMPurify from 'dompurify';

const languageLoaders: Record<string, () => LanguageInput> = {
  bash: () => import('@shikijs/langs/bash'),
  c: () => import('@shikijs/langs/c'),
  cpp: () => import('@shikijs/langs/cpp'),
  css: () => import('@shikijs/langs/css'),
  go: () => import('@shikijs/langs/go'),
  html: () => import('@shikijs/langs/html'),
  java: () => import('@shikijs/langs/java'),
  javascript: () => import('@shikijs/langs/javascript'),
  json: () => import('@shikijs/langs/json'),
  markdown: () => import('@shikijs/langs/markdown'),
  python: () => import('@shikijs/langs/python'),
  rust: () => import('@shikijs/langs/rust'),
  sql: () => import('@shikijs/langs/sql'),
  typescript: () => import('@shikijs/langs/typescript'),
  yaml: () => import('@shikijs/langs/yaml'),
};

const languageAliases: Record<string, string> = {
  bash: 'bash',
  c: 'c',
  'c++': 'cpp',
  cpp: 'cpp',
  css: 'css',
  go: 'go',
  golang: 'go',
  html: 'html',
  java: 'java',
  js: 'javascript',
  javascript: 'javascript',
  json: 'json',
  md: 'markdown',
  markdown: 'markdown',
  py: 'python',
  python: 'python',
  rs: 'rust',
  rust: 'rust',
  sh: 'bash',
  shell: 'bash',
  sql: 'sql',
  ts: 'typescript',
  tsx: 'typescript',
  typescript: 'typescript',
  yaml: 'yaml',
  yml: 'yaml',
};

let highlighterPromise: Promise<HighlighterCore> | undefined;
const loadedLanguages = new Map<string, Promise<void>>();

@Directive({
  selector: '[appShikiHighlight]',
  standalone: true,
})
export class ShikiHighlightDirective implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private observer?: MutationObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new MutationObserver(() => this.highlightCode());
    this.observer.observe(this.host.nativeElement, {
      childList: true,
      subtree: true,
    });
    this.highlightCode();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private highlightCode(): void {
    void this.renderMath();
    for (const link of this.host.nativeElement.querySelectorAll<HTMLAnchorElement>('a')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    const blocks =
      this.host.nativeElement.querySelectorAll<HTMLPreElement>('pre:not([data-shiki])');
    for (const pre of blocks) {
      const code = pre.querySelector('code');
      if (!code || code.dataset['shikiProcessing']) continue;
      code.dataset['shikiProcessing'] = 'true';
      void this.renderBlock(pre, code);
    }
  }

  private async renderBlock(pre: HTMLPreElement, code: HTMLElement): Promise<void> {
    const languageClass = [...code.classList].find((name) => name.startsWith('language-'));
    const rawLanguage = languageClass?.slice('language-'.length) || 'text';
    const normalizedLanguage = languageAliases[rawLanguage.toLowerCase()];
    const language = normalizedLanguage || rawLanguage;
    const source = code.textContent ?? '';

    if (rawLanguage.toLowerCase() === 'mermaid') {
      await this.renderMermaid(pre, source);
      return;
    }

    try {
      if (!normalizedLanguage) {
        this.wrapPlainCode(pre, language);
        return;
      }
      const highlighter = await this.getHighlighter();
      await this.loadLanguage(highlighter, normalizedLanguage);
      const highlighted = highlighter.codeToHtml(source, {
        lang: normalizedLanguage,
        theme: 'github-dark',
      });
      if (!pre.isConnected) return;

      this.wrapHighlightedCode(pre, highlighted, language);
    } catch (error) {
      console.error(`Unable to highlight ${language} code block.`, error);
      if (pre.isConnected) this.wrapPlainCode(pre, language);
    }
  }

  private async renderMath(): Promise<void> {
    const katex = await import('katex');
    const walker = this.document.createTreeWalker(
      this.host.nativeElement,
      NodeFilter.SHOW_TEXT,
    );
    const replacements: Array<{ node: Text; html: string }> = [];
    let node = walker.nextNode();
    while (node) {
      if (node.parentElement?.closest('pre,code')) {
        node = walker.nextNode();
        continue;
      }
      const text = node.textContent ?? '';
      const match = /\$\$(.+?)\$\$|\$(.+?)\$/.exec(text);
      if (match?.[0]) {
        const expression = match[1] ?? match[2] ?? '';
        const html = katex.renderToString(expression, {
          displayMode: Boolean(match[1]),
          throwOnError: false,
        });
        replacements.push({ node: node as Text, html });
      }
      node = walker.nextNode();
    }
    for (const replacement of replacements) {
      if (!replacement.node.isConnected) continue;
      const template = this.document.createElement('template');
      template.innerHTML = DOMPurify.sanitize(replacement.html);
      replacement.node.replaceWith(template.content);
    }
  }

  private async renderMermaid(pre: HTMLPreElement, source: string): Promise<void> {
    try {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({ startOnLoad: false, theme: 'neutral' });
      const id = `mermaid-${crypto.randomUUID()}`;
      const result = await mermaid.render(id, source);
      if (!pre.isConnected) return;
      const container = this.document.createElement('div');
      container.className = 'mermaid-diagram';
      container.innerHTML = DOMPurify.sanitize(result.svg);
      pre.replaceWith(container);
    } catch (error) {
      console.error('Unable to render Mermaid diagram.', error);
    }
  }

  private async getHighlighter(): Promise<HighlighterCore> {
    highlighterPromise ??= (async () => {
      const [{ createHighlighterCore }, { createOnigurumaEngine }, theme] = await Promise.all([
        import('shiki/core'),
        import('shiki/engine/oniguruma'),
        import('@shikijs/themes/github-dark'),
      ]);
      return createHighlighterCore({
        themes: [theme.default],
        langs: [],
        engine: createOnigurumaEngine(import('shiki/wasm')),
      });
    })();
    return highlighterPromise;
  }

  private async loadLanguage(highlighter: HighlighterCore, language: string): Promise<void> {
    const existing = loadedLanguages.get(language);
    if (existing) return existing;
    const loader = languageLoaders[language];
    if (!loader) throw new Error(`No syntax grammar is configured for ${language}.`);
    const loading = highlighter.loadLanguage(loader());
    loadedLanguages.set(language, loading);
    try {
      await loading;
    } catch (error) {
      loadedLanguages.delete(language);
      throw error;
    }
  }

  private wrapHighlightedCode(
    original: HTMLPreElement,
    highlighted: string,
    language: string,
  ): void {
    const fragment = this.document
      .createRange()
      .createContextualFragment(DOMPurify.sanitize(highlighted));
    const pre = fragment.querySelector('pre');
    const code = pre?.querySelector('code');
    if (!pre || !code) return;
    pre.dataset['shiki'] = 'true';
    code.dataset['shiki'] = 'true';
    this.wrapCode(original, pre, language);
  }

  private wrapPlainCode(pre: HTMLPreElement, language: string): void {
    if (!pre.isConnected) return;
    pre.dataset['shiki'] = 'true';
    this.wrapCode(pre, pre, language);
  }

  private wrapCode(original: HTMLPreElement, rendered: HTMLPreElement, language: string): void {
    const parent = original.parentNode;
    if (!parent) return;
    const wrapper = this.document.createElement('div');
    wrapper.className = 'code-block';
    const toolbar = this.document.createElement('div');
    toolbar.className = 'code-toolbar';
    const label = this.document.createElement('span');
    label.textContent = language;
    const copyButton = this.document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'code-copy';
    copyButton.dataset['copyCode'] = 'true';
    copyButton.setAttribute('aria-label', 'Copy code');
    copyButton.textContent = 'Copy';
    toolbar.append(label, copyButton);
    parent.insertBefore(wrapper, original);
    wrapper.append(toolbar, rendered);
    if (rendered !== original) original.remove();
  }
}
