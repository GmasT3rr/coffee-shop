import { Injectable } from '@angular/core';
import { SideMenuItem } from '../interfaces/side-menu-list-item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  getItemList(): SideMenuItem[] {
    return [
      {
        title: 'Shop',
        dropdownItemList: [
          {
            subTitle: 'Coffee',
            subList: [
              {
                subListTitle: 'Classic Coffees',
              },
              {
                subListTitle: 'Single Origins',
              },
            ],
          },
          {
            subTitle: 'Coffee Clubs',
            subList: [
              {
                subListTitle: 'Join the Club',
              },
              {
                subListTitle: 'Manage Your Subscription',
              },
            ],
          },
          {
            subTitle: 'Gifts',
            subList: [
              {
                subListTitle: 'Gift a Coffee Subscription',
              },
              {
                subListTitle: 'Gift a Gift Card',
              },
            ],
          },
          {
            subTitle: 'Goods',
            subList: [
              {
                subListTitle: 'Brewing Equipment',
              },
              {
                subListTitle: 'Merchandise',
              },
            ],
          },
          {
            subTitle: 'Shop All',
          },
        ],
      },
      {
        title: 'Learn',
        dropdownItemList: [
          {
            subTitle: 'Blog',
          },
          {
            subTitle: 'Contact Us',
          },
          {
            subTitle: 'FAQ',
          },
        ],
      },
      {
        title: 'Wholesale',
        dropdownItemList: [
          {
            subTitle: 'Login',
          },
          {
            subTitle: 'Wholesale Inquiry',
          },
          {
            subTitle: 'FAQ',
          },
        ],
      },
      {
        title: 'Connect',
        dropdownItemList: [
          {
            subTitle: 'About Us',
          },
          {
            subTitle: 'Cafe',
          },
          {
            subTitle: 'Carrers',
          },
          {
            subTitle: 'Press',
          },
        ],
      },
    ];
  }
}
