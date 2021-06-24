import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-quick-view',
  templateUrl: './modal-quick-view.component.html',
  styleUrls: ['./modal-quick-view.component.css']
})
export class ModalQuickViewComponent implements OnInit {

  @Input() products = [];
  prefUrlImage = `${environment.prefUrlImage}`;
  fin = `${environment.fin}`;
  prodSub: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addCart(product: Product): void {
    this.cartService.addProductToCard(product)
  }

}
