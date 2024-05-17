import { Component } from '@angular/core';
import { HomepageImageComponent } from './components/homepage-image/homepage-image.component';
import { GreatestHitsComponent } from './components/greatest-hits/greatest-hits.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomepageImageComponent, GreatestHitsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
