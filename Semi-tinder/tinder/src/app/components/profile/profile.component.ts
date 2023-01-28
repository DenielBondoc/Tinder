import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { untilDestroyed,UntilDestroy } from '@ngneat/until-destroy';
import { concatMap } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { UsersService } from 'src/app/services/users.service';


@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user$ = this.usersService.currentUserProfile$;

  profileForm = this.fb.group({
    uid: [''],
    displayName: [''],
    firstName: [''],
    lastName: [''],
    phone: [''],
    address: ['']
  });

  constructor(private authService: AuthenticationService,
     private imageUploadService: ImageUploadService,
      private toast: HotToastService,
     private usersService: UsersService,
     private fb: NonNullableFormBuilder
     ){}

  ngOnInit(): void{
    this.usersService.currentUserProfile$.pipe(
      untilDestroyed(this)
    ).subscribe((user) => {
      this.profileForm.patchValue({ ...user });
    })
  }

  uploadImage(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe(
        {
          loading: 'Image is being uploaded',
          success: 'Image uploaded',
          error: 'There was an error while uploading'
        }
      ),
      concatMap((photoURL) => this.usersService.updateUser({ uid: user.uid, photoURL }))
    ).subscribe();
  }



  saveProfile(){
    const { uid, ...data } = this.profileForm.value;

    if (!uid) {
      return;
    }
    
    this.usersService.updateUser({ uid, ...data }).pipe(
      this.toast.observe({
        loading: 'updating data...',
        success: 'data has been updated',
        error: 'error while updating'
      })
    ).subscribe();
  }
}
