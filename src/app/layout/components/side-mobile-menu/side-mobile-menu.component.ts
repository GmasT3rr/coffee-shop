import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-side-mobile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-mobile-menu.component.html',
  styleUrl: './side-mobile-menu.component.scss'
})
export class SideMobileMenuComponent {
  @Output() toggleMenuRequest = new EventEmitter<void>();
  @Input()  showSideMenu:boolean = false

  public toggleListButtonArray: boolean[] = [];
  
  toggleListButton(index: number): void {
      this.toggleListButtonArray[index] = !this.toggleListButtonArray[index];
  }


  toggleMenu() {
    this.showSideMenu = false
    this.toggleMenuRequest.emit();
  }
}
