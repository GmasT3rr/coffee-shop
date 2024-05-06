import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollOpacityDirective } from '../../directives/scroll-opacity.directive';
import { DropdownHoverDirective } from '../../directives/dropdown-hover.directive';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { fromEvent, startWith, map } from 'rxjs';
import { SideMobileMenuComponent } from '../side-mobile-menu/side-mobile-menu.component';

import { SideMobileSearchComponent } from '../side-mobile-search/side-mobile-search.component';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ScrollOpacityDirective,
    DropdownHoverDirective,
    SideMobileMenuComponent,
    SideMobileSearchComponent,
  ],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
})
export class NavbarMobileComponent implements OnInit {
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  navbarHeight: number = 0;
  showSideMenu: boolean = false;
  showSideSearchMenu: boolean = true;

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

  toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu;
  }
  toggleSearchSideMenu() {
    this.showSideSearchMenu = !this.showSideSearchMenu;
  }
}
