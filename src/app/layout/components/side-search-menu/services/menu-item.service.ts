import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }

  getItemList(){
    return  [
      {
        name: 'SUGGESTIONS',
        hasImage: false,
        items: [
          {
            itemName: 'mexico',
          },
          {
            itemName: 'Brasil',
          },
          {
            itemName: 'Perú',
          },
        ],
      },
      {
        name: 'COLLECTIONS',
        hasImage: true,
        items: [
          {
            itemName: 'gift a coffe',
            imgUrl: 'mugRocketLove.jpeg',
          },
          {
            itemName: 'gift a coffe subcription',
            imgUrl: 'mugRocketLove.jpeg',
          },
          {
            itemName: 'from atlanta with love',
            imgUrl: 'mugRocketLove.jpeg',
          },
        ],
      },
      {
        name: 'PAGES',
        hasImage: false,
  
        items: [
          {
            itemName: 'About us',
          },
          {
            itemName: 'Susbcribe',
          },
          {
            itemName: 'Shopp all',
          },
        ],
      },
      {
        name: 'PRODUCTS',
        hasImage: true,
  
        items: [
          {
            itemName: 'produto 1',
            price: '90',
            imgUrl: 'mugRocketLove.jpeg',
          },
          {
            itemName: 'produto 2',
            price: '40',
            imgUrl: 'mugRocketLove.jpeg',
          },
          {
            itemName: 'produto 3',
            price: '50',
            imgUrl: 'mugRocketLove.jpeg',
          },
          {
            itemName: 'produto 4',
            price: '90',
            imgUrl: 'mugRocketLove.jpeg',
          },
          {
            itemName: 'produto 5',
            price: '40',
            imgUrl: 'mugRocketLove.jpeg',
          },
          {
            itemName: 'produto 6',
            price: '50',
            imgUrl: 'mugRocketLove.jpeg',
          },
        ],
      },
    ];
  }
}
