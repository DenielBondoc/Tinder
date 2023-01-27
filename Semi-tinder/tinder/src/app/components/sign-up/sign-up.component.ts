import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';


export function passwordsMatchValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  };
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  hide = true;

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidator() })

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
    ){}

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }
  
  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit(){
    const { name, email, password } = this.signUpForm.value;
    if(!this.signUpForm.valid || !name || !email || !password){
      return;
    }

    this.authService.signUp(name, email, password).pipe(
      this.toast.observe({
         success: 'You are all signed up',
         loading: 'Signing in...',
         error: ({ message }) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
