import { Component, Input } from '@angular/core';
import { SideMenuItem } from '../../interfaces/side-menu-list-item';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input() data!: SideMenuItem;
  @Input() elementNumber!: number;

  faChevronDown = faChevronDown;

  public toggleListButtonArray: boolean[] = [];

  toggleListButton(index: number): void {
    this.toggleListButtonArray[index] = !this.toggleListButtonArray[index];
  }
}
