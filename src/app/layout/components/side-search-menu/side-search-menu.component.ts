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

@Component({
  selector: 'app-side-search-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
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
  public $originalPageInfo: Observable<any> = new Observable();
  public $filteredPageInfo: Observable<any> = new Observable();
  public $filter: Observable<any> = new Observable();
  public isSearching: boolean = false;
  public nothingFound: boolean = false;

  constructor(private _sideMenuService: SideMenuService) {}

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
    return of(this.pageInfo);
  }

  toggleSearchMenu() {
    this.showSideSearchMenu = false;
    this.toggleSearchMenuRequest.emit();
    this.setSideMenuState();
  }

  search(): Observable<any> {
    return (this.$filteredPageInfo = this.$filter.pipe(
      debounceTime(300),
      switchMap((filterValue: string) => {
        return this.$originalPageInfo.pipe(
          map((objects: any) => {
            return objects.map((element: any) => {
              return {
                ...element,
                items: element.items.filter((item: any) => {
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
      tap((items: any[]) => {
        if (
          this.searchControl.value !== undefined &&
          this.searchControl.value?.trim() !== ''
        ) {
          const allEmpty = items.every((item: any) => item.items.length === 0);
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

  pageInfo = [
    {
      name: 'SUGGESTIONS',
      hasImage: false,
      items: [
        {
          itemName: 'mexico',
        },
        {
          itemName: 'Brasil',
        },
        {
          itemName: 'Perú',
        },
      ],
    },
    {
      name: 'COLLECTIONS',
      hasImage: true,
      items: [
        {
          itemName: 'gift a coffe',
          imgUrl: '',
        },
        {
          itemName: 'gift a coffe subcription',
          imgUrl: '',
        },
        {
          itemName: 'from atlanta with love',
          imgUrl: '',
        },
      ],
    },
    {
      name: 'PAGES',
      hasImage: false,

      items: [
        {
          itemName: 'About us',
        },
        {
          itemName: 'Susbcribe',
        },
        {
          itemName: 'Shopp all',
        },
      ],
    },
    {
      name: 'PRODUCTS',
      hasImage: true,

      items: [
        {
          itemName: 'produto 1',
          price: '90',
          imgUrl: '',
        },
        {
          itemName: 'produto 2',
          price: '40',
          imgUrl: '',
        },
        {
          itemName: 'produto 3',
          price: '50',
          imgUrl: '',
        },
      ],
    },
  ];
}
