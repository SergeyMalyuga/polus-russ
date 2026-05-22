import { Inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ViewportService implements OnDestroy {
  private readonly mediaQuery!: MediaQueryList;
  public isMobile = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    if (isPlatformBrowser(platformId)) {
      this.mediaQuery = window.matchMedia('(max-width: 767px)');
      this.isMobile.set(this.mediaQuery.matches);
      this.mediaQuery.addEventListener('change', this.onChange);
    }
  }

  private onChange = (evt: MediaQueryListEvent) => {
    if (this.mediaQuery) {
      this.isMobile.set(evt.matches);
    }
  };

  public ngOnDestroy(): void {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.onChange);
    }
  }
}
