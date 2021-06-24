import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart[] = []
  prefUrlImage = environment.prefUrlImage;
  sufUrlImage = '.png';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  addProduct(product: Product) : void {
    this.cartService.addProductToCard(product)
  }

  deleteProduct(product: Product) : void {
    this.cartService.deleteFromCard(product)
  }

}
