import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private fb: NonNullableFormBuilder
    ){}

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    const { email, password } = this.loginForm.value;
    if(!this.loginForm.valid || !email || !password){
      return;
    }

    this.authService.login(email, password).pipe(
      this.toast.observe({
         success: 'Logged in succesfully',
         loading: 'Logging in...',
         error: 'There was an error'
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
