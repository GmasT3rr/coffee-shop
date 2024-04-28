import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TopAnnouncementComponent } from '../top-announcement/top-announcement.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, RouterOutlet, TopAnnouncementComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
