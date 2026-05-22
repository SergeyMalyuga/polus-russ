import { Directive, ElementRef, inject, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFocusOnShow]',
})
export class FocusOnShowDirective implements OnChanges {
  @Input({ required: true }) isOnFocus!: boolean;

  private elementRef = inject(ElementRef<HTMLElement>);

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOnFocus'] && this.isOnFocus) {
      setTimeout(() => this.elementRef.nativeElement.focus(), 100);
    }
  }
}
