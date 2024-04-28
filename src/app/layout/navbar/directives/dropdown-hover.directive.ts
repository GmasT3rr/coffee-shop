import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[directiveDropdownHover]',
  standalone: true
})
export class DropdownHoverDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement.parentElement, 'link-no-hover');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement.parentElement, 'link-no-hover');
  }
}
