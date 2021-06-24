import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;
  click;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private routeur: Router) { }

  ngOnInit(): void {
    this.errorMessage = "Veuillez remplire des valeurs valides. Merci de réessayer !";
    this.click = false;
    this.initRegisterForm();
  }

  initRegisterForm(){
    this.registerForm = this.formBuilder.group({
      sexe: this.formBuilder.control('', [Validators.required]),
      pseudo: this.formBuilder.control('', [Validators.required]),
      first_name: this.formBuilder.control('', [Validators.required]),
      last_name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      dateBirth: this.formBuilder.control('', [Validators.required]),
    });
  }

  onSubmit(): void{
    this.click = true
    const sexeUser = this.registerForm.get('sexe').value;
    const pseudoUser = this.registerForm.get('pseudo').value;
    const first_nameUser = this.registerForm.get('first_name').value;
    const last_nameUser = this.registerForm.get('last_name').value;
    const emailUser = this.registerForm.get('email').value;
    const passwordUser = this.registerForm.get('password').value;
    const dateBirthUser = this.registerForm.get('dateBirth').value;

    const newUser: Users = {
      sexe: sexeUser, first_name: first_nameUser, last_name: last_nameUser, email: emailUser, password: passwordUser, date_birth: dateBirthUser, pseudo: pseudoUser
    };
    this.userService.createUser(newUser).then(
      (data)=>{
        this.routeur.navigate(['/shop']);
      }
    )
    .catch((error)=>{
      this.errorMessage = error;
      console.log(error)
    });
  }
}
