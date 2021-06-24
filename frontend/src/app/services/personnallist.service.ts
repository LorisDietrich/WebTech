import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { Product } from '../model/product';
import { UsersService } from './users.service';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class PersonnallistService {

  products: Product[] = [];
  prodSubject = new Subject<any[]>();
  userSub: Subscription;
  user: Users;

  constructor(private http: HttpClient, private userService: UsersService) {
    this.getPersonnalListFromServer();
  }

  emitPersonnalList(): void{
    this.prodSubject.next(this.products);
  }

  getPersonnalListFromServer(): void {

    this.userSub = this.userService.userSubject.subscribe(
      (user)=>{
        this.user = user;
      }
    );
    this.userService.emitUser();
    console.log("oueoueoue")
    console.log(this.user)
    console.log("oueoueoue")
    const url = "http://localhost:3000/personnal-list/" + this.user[0].id_user
    this.http.get<Product[]>(url).subscribe(
      (response)=> {
        this.products = response
        console.log("hhhhhhhh" + this.products)
        this.emitPersonnalList();
      }
    )
  }

}
