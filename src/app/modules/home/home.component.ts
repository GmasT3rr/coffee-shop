import { Component } from '@angular/core';
import { HomepageImageComponent } from './components/homepage-image/homepage-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomepageImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
