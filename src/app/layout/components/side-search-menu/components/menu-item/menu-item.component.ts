import { Component, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
}
