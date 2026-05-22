import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyService {
  private readonly document = inject(DOCUMENT);

  public setScrollLocked(isNoScroll: boolean) {
    this.document.body.classList.toggle('no-scroll', isNoScroll);
  }
}
