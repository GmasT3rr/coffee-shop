import { Injectable } from '@angular/core';
import { FooterItem } from '../interface/footer-item';

@Injectable({
  providedIn: 'root',
})
export class FooterItemService {
  constructor() {}

  getFooterItemsData(): FooterItem[] {
    return [
      {
        name: 'CUSTOMER SERVICE',
        links: [
          'FAQ',
          'Contact Us',
          'Refund Policy',
          'Privacy Policy',
          'Terms of Service',
          'Wholesale',
        ],
      },
      {
        name: 'LEARN',
        links: ['About Us', 'Careers', 'Contact Us', 'Blog', 'Press'],
      },
      {
        name: 'NEWSLETTER',
        links: [],
        subscribe:true
      },
      {
        name: 'CONNECT WITH US',
        links: [],
        icons: true,
      },
    ];
  }
}
