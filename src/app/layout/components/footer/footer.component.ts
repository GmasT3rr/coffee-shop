import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterItemComponent } from './components/footer-item/footer-item.component';
import { FooterItem } from './interface/footer-item';
import { FooterItemService } from './services/footer-item.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterItemComponent, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  faCcAmex=faCcAmex


  footerItemsData!:FooterItem[]

  constructor(private _footerItemService:FooterItemService){}

  ngOnInit(): void {
    this.footerItemsData = this._footerItemService.getFooterItemsData()
  }

}
