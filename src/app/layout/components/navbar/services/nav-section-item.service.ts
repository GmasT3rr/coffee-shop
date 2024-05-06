import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavSectionItemService {
  constructor() {}

  getNavbarSections() {
    return [
      {
        name: 'Shop',
        links: [
          { name: 'Coffee', dropdown: ['Classic Coffees', 'Single Origins'] },
          {
            name: 'Coffee Club',
            dropdown: ['Join The Club', 'Manage Your Subscription'],
          },
          {
            name: 'Gifts',
            dropdown: ['Gift a Coffee Subscription', 'Gift a Gift Card'],
          },
          { name: 'Goods', dropdown: ['Brewing Equipment', 'Merchandise'] },
          { name: 'Shop All' },
        ],
      },
      {
        name: 'Learn',
        links: [
          { name: 'Blog', dropdown: [] },
          {
            name: 'Contact Us',
            dropdown: [],
          },
          {
            name: 'FAQ',
            dropdown: [],
          },
        ],
      },
      {
        name: 'Wholesale',
        links: [
          { name: 'Login', dropdown: [] },
          {
            name: 'Wholesale Inquiry',
            dropdown: [],
          },
        ],
      },

      {
        name: 'Connect',
        links: [
          { name: 'About Us', dropdown: [] },
          {
            name: 'Cafe',
            dropdown: [],
          },
          {
            name: 'Careers',
            dropdown: [],
          },
          {
            name: 'Press',
            dropdown: [],
          },
        ],
      },
    ];
  }
}
