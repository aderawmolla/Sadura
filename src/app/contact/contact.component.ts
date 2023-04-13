import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isSubmitted=false;
  message = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', ),
    say: new FormControl('',Validators.required),
     
  });
  constructor(
    private service: PostsService
  ) {}
  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.message.valid) {
              this.service.setMessage(formValue);
              this.resetForm(); 
    }
 alert("Thank you your message sent successfully")
  }

  //
  get formControls() {
    return this.message['controls'];
  }
  resetForm() {
    this.message.reset();
    this.message.setValue({
      name: '',
      email: '',
      say: '',
    });
    this.isSubmitted = false;
  }

}
