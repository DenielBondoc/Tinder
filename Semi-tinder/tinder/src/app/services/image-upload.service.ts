import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ref, Storage, uploadBytes } from '@angular/fire/storage'
import { from } from 'rxjs';
import { getDownloadURL } from '@firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: Storage) { }

  uploadImage(image: File, path: string): Observable<string>{
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
  return uploadTask.pipe(
    switchMap((resut) => getDownloadURL(resut.ref))
  );
  }
}
