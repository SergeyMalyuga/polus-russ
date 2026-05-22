// header.component.ts
import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleDirective } from '../../shared/directives/toggle';
import { NgClass } from '@angular/common';
import { ViewportService } from '../../services/viewport.service';
import { FocusOnShowDirective } from '../../shared/directives/focus-on-show.directive';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ToggleDirective, NgClass, FocusOnShowDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private viewportService = inject(ViewportService);
  private bodyService = inject(BodyService);

  public isNavOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const isMobile = this.viewportService.isMobile();
      if (!isMobile) {
        this.isNavOpen.set(false);
        this.bodyService.setScrollLocked(false);
      }
    });
  }

  public toggleNavMenu() {
    this.isNavOpen.set(!this.isNavOpen());
    this.bodyService.setScrollLocked(this.isNavOpen());
  }

  public closeNavMenu() {
    if (this.isNavOpen() && this.viewportService.isMobile()) {
      this.isNavOpen.set(false);
      this.bodyService.setScrollLocked(false);
    }
  }
}
