import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart[];
  cartData;

  constructor(private carteService: CartService) {
    this.cart = this.carteService.cart;
    this.cartData = this.carteService.cartData;
   }

  ngOnInit(): void {
    console.log(this.cart)
    console.log(this.cartData)
  }

}
