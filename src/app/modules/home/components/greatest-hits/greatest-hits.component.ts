import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-greatest-hits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greatest-hits.component.html',
  styleUrl: './greatest-hits.component.scss',
})
export class GreatestHitsComponent {
  greatestsHits: Array<{ image: string; name: string; price: string }> = [];

  constructor() {
    this.greatestsHits = [
      {
        image:
          'https://portrait.coffee/cdn/shop/files/brickbybrick_brickbybrick_1100x.png?v=1713658331',
        name: 'Brick by Brick, a Chrome Yellow & Portrait Coffee',
        price: '22.00',
      },
      {
        image:
          'https://portrait.coffee/cdn/shop/products/Toni.png?v=1693840514',
        name: 'TONI',
        price: '16.00',
      },
      {
        image:
          'https://portrait.coffee/cdn/shop/files/IMG-6058_e9ee5d9d-095f-419d-8218-3502965e6f26_1100x.png?v=1710707137',
        name: 'COLOMBIA LA CRISTALINA NATURAL',
        price: '20.00',
      },
    ];

    this.greatestsHits.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
  }
}
