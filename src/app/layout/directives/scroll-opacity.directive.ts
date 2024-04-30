import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[directiveScrollOpacity]',
  standalone: true,
})
export class ScrollOpacityDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.elementRef.nativeElement;
    
    if (window.scrollY > 0) {
      this.renderer.addClass(header, 'translucent');
    } else {
      this.renderer.removeClass(header, 'translucent');
    }
  }
}
