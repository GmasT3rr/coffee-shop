import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-section-sub-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-section-sub-dropdown.component.html',
  styleUrl: './nav-section-sub-dropdown.component.scss',
})
export class NavSectionSubDropdownComponent {
  @Input() link!: string;
}
