import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage;
  click;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.click = false;
    this.errorMessage = "email ou mot de passe incorrecte. Merci de réessayer !"
    this.initFormLogin();
  }

  initFormLogin(){
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(): void{
    this.click = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const newUser: Users = {email: email, password: password}
    this.userService.authentifier(newUser).then(
      (data)=>{
        const cart = this.cartService.cart;

        this.router.navigate(['/shop']);

      }
    ).catch((error)=>{
      this.errorMessage = "email ou mot de passe incorrecte. Merci de réessayer !";
      console.log(error)
    })

    //console.log({email: email, password: password});
  }
}
