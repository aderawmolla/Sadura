import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent{
    imgSrc: string;
    selectedImage: any = null;
    isSubmitted: boolean;
    public writtenWords = 0;
     

    //here no need to use interface
    projectIdea = new FormGroup({
      title: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      descriptionS: new FormControl(''),
       
    });
    constructor(
      private storage:AngularFireStorage,
      private service: PostsService
    ) {}
  
    ngOnInit() {
      this.imgSrc="../../assets/images/image_placeholder.jpg"
      this.resetForm();
    }
    showPreview(event: any) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => (this.imgSrc = e.target.result);
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
      } else {
        this.imgSrc = '../../assets/images/image_placeholder.jpg';
        this.selectedImage = this.imgSrc;
      }
    }
  
    //accepted from template as projectIdea.value
    onSubmit(formValue) {
      this.isSubmitted = true;
      if (this.projectIdea.valid) {
        var filePath = `${formValue.category}/${this.selectedImage.name
          .split('.')
          .slice(0, -1)
          .join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(filePath);
        this.storage
          .upload(filePath, this.selectedImage)
          .snapshotChanges()
          .pipe(
            //a callback after image is uploaded
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                formValue['imageUrl'] = url;
                alert('በትክክል ተልኳል');
                this.service.setPostIdea(formValue);
                this.resetForm();
              });
            })
          )
          .subscribe();
      }
    }
  
    //
    get formControls() {
      return this.projectIdea['controls'];
    }

    resetForm() {
      this.projectIdea.reset();
      this.projectIdea.setValue({
        title: '',
        imageUrl: '',
        descriptionS: '',
      });
      this.imgSrc = '/assets/images/image_placeholder.jpg';
      this.selectedImage = null;
      this.isSubmitted = false;
      this.writtenWords = 0;
    }
    wordCounter() {
      this.writtenWords = 0 + this.projectIdea.value.title.length;
    }
  
}
