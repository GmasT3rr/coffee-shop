import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterItem } from '../../interface/footer-item';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer-item.component.html',
  styleUrl: './footer-item.component.scss'
})
export class FooterItemComponent {
  @Input() data!:FooterItem
  faFacebook=faFacebook
  faTwitter=faTwitter
  faInstagram=faInstagram
  faYoutube=faYoutube
}
