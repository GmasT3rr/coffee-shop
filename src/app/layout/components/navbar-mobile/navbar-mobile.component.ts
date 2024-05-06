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

import { SideSearchMenuComponent } from '../side-search-menu/side-search-menu.component';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ScrollOpacityDirective,
    DropdownHoverDirective,
    SideMobileMenuComponent,
    SideSearchMenuComponent,
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
  showSideSearchMenu: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private _sideMenuService: SideMenuService
  ) {
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
    this._sideMenuService.setOpen();
    this.showSideMenu = !this.showSideMenu;
  }
  toggleSearchSideMenu() {
    this._sideMenuService.setOpen();
    this.showSideSearchMenu = !this.showSideSearchMenu;
  }
}
