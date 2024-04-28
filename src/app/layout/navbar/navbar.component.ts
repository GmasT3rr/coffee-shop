import { Component, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ScrollOpacityDirective } from './directives/scroll-opacity.directive';
import { DropdownHoverDirective } from './directives/dropdown-hover.directive';
import { CommonModule } from '@angular/common';

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
  navbarHeight: number = 0;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.navbarHeight = this.elementRef.nativeElement.offsetHeight;
  }

}
