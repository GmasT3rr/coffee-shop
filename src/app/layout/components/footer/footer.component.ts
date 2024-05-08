import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterItemComponent } from './components/footer-item/footer-item.component';
import { FooterItem } from './interface/footer-item';
import { FooterItemService } from './services/footer-item.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterItemComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  footerItemsData!:FooterItem[]

  constructor(private _footerItemService:FooterItemService){}

  ngOnInit(): void {
    this.footerItemsData = this._footerItemService.getFooterItemsData()
  }

}
