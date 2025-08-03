import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  isOpen = false;

  userRole = signal('');
  isLogged = signal(false);

  email = '';
  password = '';

  loginForm : FormGroup

  constructor(
    private router: Router,
    // private loginService: LoginService,
    private formbuilder : FormBuilder
  ) { 
 
    this.loginForm =  this.formbuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]]
    })
  }


   login() {
    //  this.loginService.login(this.email, this.password);
    //     this.userRole.set(localStorage.getItem('role') || '');
    //      this.isLogged.set(true);
    //     this.isOpen = false;

    // if (this.loginForm.valid) {
    //   const { email, password } = this.loginForm.value;

    //   this.loginService.login(email, password);

    //       console.log('Login simulé ' + email + ' ' + password);        

   //}
  


    };

    logout() {
      this.userRole.set('');
      this.isLogged.set(false);
      this.router.navigate(['/']); 
  }

  openForm() {
    this.isOpen = !this.isOpen;
  }

}
