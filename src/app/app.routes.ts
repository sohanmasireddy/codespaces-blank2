import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./chat-page/chat-page').then((module) => module.ChatPage),
  },
  { path: '**', redirectTo: '' },
];
