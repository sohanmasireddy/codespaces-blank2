import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideIcons } from '@ng-icons/core';
import {
  lucideAlertCircle,
  lucideArrowUp,
  lucideBot,
  lucideCalendarDays,
  lucideCodeXml,
  lucideCopy,
  lucideGlobe,
  lucideHistory,
  lucideLightbulb,
  lucideMessageSquare,
  lucideMonitor,
  lucideMoon,
  lucidePaperclip,
  lucidePanelLeftClose,
  lucidePanelLeftOpen,
  lucidePencil,
  lucidePlus,
  lucideRotateCcw,
  lucideSearch,
  lucideSettings,
  lucideSlidersHorizontal,
  lucideSquare,
  lucideSun,
  lucideTrash,
  lucideX,
} from '@ng-icons/lucide';
import { MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes),
    provideIcons({
      lucideAlertCircle,
      lucideArrowUp,
      lucideBot,
      lucideCalendarDays,
      lucideCodeXml,
      lucideCopy,
      lucideGlobe,
      lucideHistory,
      lucideLightbulb,
      lucideMessageSquare,
      lucideMonitor,
      lucideMoon,
      lucidePaperclip,
      lucidePanelLeftClose,
      lucidePanelLeftOpen,
      lucidePencil,
      lucidePlus,
      lucideRotateCcw,
      lucideSearch,
      lucideSettings,
      lucideSlidersHorizontal,
      lucideSquare,
      lucideSun,
      lucideTrash,
      lucideX,
    }),
    provideMarkdown({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: { gfm: true, breaks: false },
      },
    }),
  ],
};
