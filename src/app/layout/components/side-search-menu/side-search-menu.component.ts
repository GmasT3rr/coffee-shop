import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faXmark,
  faSearch,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, of, debounceTime, switchMap, map, tap } from 'rxjs';
import { SideMenuService } from '../../services/side-menu.service';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuItem} from './interfaces/menu-item';
import { MenuSubItem } from './interfaces/menu-sub-item';
import { MenuItemService } from './services/menu-item.service';

@Component({
  selector: 'app-side-search-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, MenuItemComponent],
  templateUrl: './side-search-menu.component.html',
  styleUrl: './side-search-menu.component.scss',
})
export class SideSearchMenuComponent {
  @Output() toggleSearchMenuRequest = new EventEmitter<void>();
  @Input() showSideSearchMenu: boolean = false;
  @Input() isMobile: boolean = false;
  faXmark = faXmark;
  faSearch = faSearch;
  faCircleNotch = faCircleNotch;

  public searchControl: FormControl = new FormControl(undefined);
  public $originalPageInfo: Observable<MenuItem[]> = new Observable();
  public $filteredPageInfo: Observable<MenuItem[]> = new Observable();
  public $filter: Observable<string> = new Observable();
  public isSearching: boolean = false;
  public nothingFound: boolean = false;

  constructor(private _sideMenuService: SideMenuService, private _menuItem:MenuItemService) {}

  ngOnInit(): void {
    this.$originalPageInfo = this.getPageInfoForSearching();

    this.$filter = this.searchControl.valueChanges;
    this.$filter.subscribe((filter) => {
      if (filter?.trim() === '' || filter === undefined) {
        this.$filteredPageInfo = of([]);
      } else {
        this.isSearching = true;
      }
    });
    this.search().subscribe();
  }

  setSideMenuState() {
    this._sideMenuService.setClose();
  }

  getPageInfoForSearching() {
    return of(this._menuItem.getItemList());
  }

  toggleSearchMenu() {
    this.showSideSearchMenu = false;
    this.toggleSearchMenuRequest.emit();
    this.setSideMenuState();
  }

  search(): Observable<MenuItem[]> {
    return (this.$filteredPageInfo = this.$filter.pipe(
      debounceTime(300),
      switchMap((filterValue: string) => {
        return this.$originalPageInfo.pipe(
          map((objects: MenuItem[]) => {
            return objects.map((element: MenuItem) => {
              return {
                ...element,
                items: element.items.filter((item: MenuSubItem) => {
                  return item.itemName
                    .toLowerCase()
                    .includes(filterValue?.toLowerCase());
                }),
              };
            });
          })
        );
      }),
      tap(() => {
        this.isSearching = false;
      }),
      tap((items: MenuItem[]) => {
        if (
          this.searchControl.value !== undefined &&
          this.searchControl.value?.trim() !== ''
        ) {
          const allEmpty = items.every((item: MenuItem) => item.items.length === 0);
          this.nothingFound = allEmpty;
        } else {
          this.nothingFound = false;
        }
      })
    ));
  }

  clearSearch() {
    this.searchControl.setValue(undefined);
    this.search();
  }

  
}
