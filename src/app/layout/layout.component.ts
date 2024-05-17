import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TopAnnouncementComponent } from './components/top-announcement/top-announcement.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { SideMenuService } from './services/side-menu.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    TopAnnouncementComponent,
    NavbarMobileComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  isMobile: boolean = false;
  sideMenuState: boolean = false;
  footerLoading:boolean = true
  constructor(
    private render: Renderer2,
    private _sideMenuService: SideMenuService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.checkIfMobile();
  }

  ngOnInit(): void {
    this._sideMenuService.State.subscribe((state: boolean) => {
      this.sideMenuState = state;
      if (state) {
        this.render.addClass(this.document.body, 'sideMenuOpen');        
      } else {
        this.render.removeClass(this.document.body, 'sideMenuOpen');
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 990;
  }

  loadFooter(event: any) {
    // Cuando el componente del router-outlet se activa, se detiene el indicador de carga
    this.footerLoading = false;
  }
}
