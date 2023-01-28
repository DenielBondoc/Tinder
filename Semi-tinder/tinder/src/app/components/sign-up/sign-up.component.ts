import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { UsersService } from 'src/app/services/users.service';
import { switchMap } from 'rxjs';


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

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['',[Validators.email, Validators.required]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validators: passwordsMatchValidator() });


  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private usersService: UsersService,
    private fb: NonNullableFormBuilder
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
    
    if(!this.signUpForm.valid || !name || !password || !email){
      return;
    }

    this.authService
    .signUp(email, password)
    .pipe(
      switchMap(({ user: { uid } }) => 
      this.usersService.addUser({ uid, email, displayName: name })
      ),
      this.toast.observe({
         success: 'You are all signed up',
         loading: 'Signing up...',
         error: ({ message }) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
