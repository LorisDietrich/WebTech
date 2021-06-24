import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';

import { Subject } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: Users;
  isAuth = false;
  userSubject = new Subject<Users>();

  constructor(private http: HttpClient) { }

  emitUser(){
    this.userSubject.next(this.user);
  }

  authentifier(newUser: Users){
    return new Promise(
      (resolve, rejecte)=>{
        const url = 'http://localhost:3000/auth&email=' + newUser.email + '&password=' + newUser.password;
        this.http.get(url).subscribe(
          (data)=>{
            if(data[0]){
              console.log(data)
              this.user = <Users>data;
              this.isAuth = true;
              this.emitUser()

            resolve(data);
            }
          }, (error)=>{
            console.log("error: " + error)
            rejecte(false);
          }
        )
      }
    )
  }

  createUser(newUser: Users){
    return new Promise(
      (resolve, rejecte)=>{
        const url = 'http://localhost:3000/createUser&email=' + newUser.email + '&password=' + newUser.password + '&sexe=' + newUser.sexe + '&firstname=' + newUser.first_name + '&lastname=' + newUser.last_name + '&dateBirth=' + newUser.date_birth + '&pseudo=' + newUser.pseudo;

        this.http.get(url).subscribe(
          (data)=>{
            this.user = <Users>data;
            this.isAuth = true;
            this.emitUser()
          resolve(data);
        },
        (error)=>{
          rejecte(error);
        }
      )
    }
    )
  }

  logout(): void{
    this.user = null
    this.isAuth = false
    this.userSubject = new Subject<Users>()
  }

}
