import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavSectionSubDropdownComponent } from '../nav-section-sub-dropdown/nav-section-sub-dropdown.component';
import { NavSubItem } from '../../interface/nav-sub-item';

@Component({
  selector: 'app-nav-section-sub-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NavSectionSubDropdownComponent],
  templateUrl: './nav-section-sub-item.component.html',
  styleUrl: './nav-section-sub-item.component.scss',
})
export class NavSectionSubItemComponent {
  @Input() links!: NavSubItem;
  faChevronRight = faChevronRight;
}
