import { Injectable } from '@angular/core';
import { FooterItem } from '../interface/footer-item';

@Injectable({
  providedIn: 'root'
})
export class FooterItemService {

  constructor() { }

  getFooterItemsData(): FooterItem[]{
    return [
      {
        name:"",
        links:[""]
      }
    ]
  }
}
