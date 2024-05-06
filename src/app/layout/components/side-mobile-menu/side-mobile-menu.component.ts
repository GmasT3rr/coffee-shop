import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SideMenuItem } from './interfaces/side-menu-list-item';
import { ItemsService } from './services/items.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-side-mobile-menu',
  standalone: true,
  imports: [CommonModule, ListItemComponent,FontAwesomeModule],
  templateUrl: './side-mobile-menu.component.html',
  styleUrl: './side-mobile-menu.component.scss',
})
export class SideMobileMenuComponent implements OnInit {
  @Output() toggleMenuRequest = new EventEmitter<void>();
  @Input() showSideMenu: boolean = false;

  faXmark=faXmark
  faFacebook=faFacebook
  faTwitter=faTwitter
  faInstagram=faInstagram
  faYoutube=faYoutube
  public toggleListButtonArray: boolean[] = [];
  public itemList: SideMenuItem[] = [];

  constructor(private _itemService: ItemsService, private _sideMenuService:SideMenuService) {}

  ngOnInit(): void {
    this.itemList = this._itemService.getItemList();
  }

  toggleMenu() {
    this.showSideMenu = false;
    this.toggleMenuRequest.emit();
    this.setSideMenuState()
  }

  setSideMenuState() {
    this._sideMenuService.setClose();
  }

}
