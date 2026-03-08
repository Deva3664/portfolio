import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(true);

  toggle() {
    this.isDark.update(v => !v);
    document.body.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
  }

  init() {
    document.body.setAttribute('data-theme', 'dark');
  }
}