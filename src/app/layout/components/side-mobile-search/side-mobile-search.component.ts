import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-mobile-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-mobile-search.component.html',
  styleUrl: './side-mobile-search.component.scss'
})
export class SideMobileSearchComponent {
  @Output() toggleSearchMenuRequest = new EventEmitter<void>();
  @Input()  showSideSearchMenu:boolean = false

  toggleSearchMenu() {
    this.showSideSearchMenu = false
    this.toggleSearchMenuRequest.emit();
  }
}
