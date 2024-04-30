import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TopAnnouncementComponent } from './components/top-announcement/top-announcement.component';
import { CommonModule } from '@angular/common';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent, RouterOutlet, TopAnnouncementComponent, NavbarMobileComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isMobile: boolean = false;

  constructor() { 
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 990;
  }
}
