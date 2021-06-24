import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Users } from '../model/users';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private cartService: CartService) { }

  createOrders(user: Users, cart: Cart[]){
    return new Promise(
      (resolve, reject)=>{
        cart.forEach((data)=>{
          const price = data.number * data.product.price;
        }); //end foreach
      }
    )
  }
}
