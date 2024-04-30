import { Component, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faChevronRight, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ScrollOpacityDirective } from '../../directives/scroll-opacity.directive';
import { DropdownHoverDirective } from '../../directives/dropdown-hover.directive';
import { CommonModule } from '@angular/common';
import { fromEvent, startWith, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, ScrollOpacityDirective, DropdownHoverDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faSearch=faSearch
  faUser=faUser
  faShoppingCart=faShoppingCart
  faChevronRight=faChevronRight
  faBars=faBars
  navbarHeight: number = 0;

  constructor(private elementRef: ElementRef) {
    const navbarHeight$ = fromEvent(window, 'resize').pipe(
      startWith(null),
      map(() => this.elementRef.nativeElement.offsetHeight)
    );
    navbarHeight$.subscribe((res: any) => {
      if (res != 0) {
        this.navbarHeight = res;
      }
    });
  }

  ngOnInit(): void {
    this.navbarHeight = this.elementRef.nativeElement.offsetHeight;
  }

}
