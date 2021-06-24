import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [];
  prodSub: Subscription;

  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.prodSub = this.prodService.prodSubject.subscribe(
      (data)=>{
        //this.products = data;
        this.products = this.prodService.getProductbyPage(0);
      }
    );
    this.prodService.emitProducts();
  }

}
