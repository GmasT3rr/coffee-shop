import { Component, ElementRef, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faChevronRight,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { ScrollOpacityDirective } from '../../directives/scroll-opacity.directive';
import { DropdownHoverDirective } from '../../directives/dropdown-hover.directive';
import { CommonModule } from '@angular/common';
import { fromEvent, startWith, map } from 'rxjs';
import { SideSearchMenuComponent } from '../side-search-menu/side-search-menu.component';
import { SideMenuService } from '../../services/side-menu.service';
import { NavSectionItemComponent } from './components/nav-section-item/nav-section-item.component';
import { NavSectionItemService } from './services/nav-section-item.service';
import { NavItem } from './interface/nav-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ScrollOpacityDirective,
    DropdownHoverDirective,
    SideSearchMenuComponent,
    NavSectionItemComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faChevronRight = faChevronRight;
  faBars = faBars;
  navbarHeight: number = 0;

  navbarSections!: NavItem[];
  showSideSearchMenu: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private _sideMenuService: SideMenuService,
    private _navSectionItemService: NavSectionItemService
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
    this.navbarSections = this._navSectionItemService.getNavbarSections();
  }

  toggleSearchSideMenu() {
    this._sideMenuService.setOpen();
    this.showSideSearchMenu = !this.showSideSearchMenu;
  }
}
