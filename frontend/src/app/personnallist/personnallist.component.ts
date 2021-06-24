import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from '../model/users';
import { PersonnallistService } from '../services/personnallist.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-personnallist',
  templateUrl: './personnallist.component.html',
  styleUrls: ['./personnallist.component.css']
})
export class PersonnallistComponent implements OnInit {

  products = [];
  prodSub: Subscription;
  userSub: Subscription;
  user: Users;

  constructor(private prodService:PersonnallistService, private userService: UsersService) { }

  ngOnInit(): void {

    this.userSub = this.userService.userSubject.subscribe(
      (user)=>{
        this.user = user;
      }
    );
    this.userService.emitUser();

    console.log(this.user)

    this.prodSub = this.prodService.prodSubject.subscribe(
      (data)=>{
        this.products = data;

      }
    );
    this.prodService.emitPersonnalList();

    console.log(this.products)
  }

}
