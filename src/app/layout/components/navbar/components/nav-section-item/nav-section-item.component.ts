import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavSectionSubItemComponent } from '../nav-section-sub-item/nav-section-sub-item.component';
import { NavItem } from '../../interface/nav-item';

@Component({
  selector: 'app-nav-section-item',
  standalone: true,
  imports: [CommonModule, NavSectionSubItemComponent],
  templateUrl: './nav-section-item.component.html',
  styleUrl: './nav-section-item.component.scss',
})
export class NavSectionItemComponent {
  @Input() section!: NavItem;
}
