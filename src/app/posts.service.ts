import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Posts } from 'src/models/post';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postDetailList: AngularFireList<Posts>;  
  messageDetailList: AngularFireList<Posts>;  

  postList: AngularFireObject<Posts>; 
  constructor(
    private firebase: AngularFireDatabase,
  ) {
    this.postDetailList = firebase.list('posts');
    this.messageDetailList=firebase.list('says')
  }  

  getPostIdea(): Observable<any> {
    this.postDetailList = this.firebase.list('posts');
    return this.postDetailList.valueChanges();
  }
  getMessage(): Observable<any> {
    this.messageDetailList = this.firebase.list('says');
    return this.messageDetailList.valueChanges();
  }
  getAllPosts() {
    this.postDetailList = this.firebase.list('posts');
    return this.postDetailList;
  }

  getAll(): AngularFireList<Posts> {
    return this.postDetailList;
  }
  setPostIdea(formValue: any) {
    this.getPostIdea();
    this.postDetailList.push(formValue); // Use unshift() to add the new post as the first entry
  }
  getAllMessages() {
    this.messageDetailList = this.firebase.list('says');
    return this.messageDetailList;
  }
  setMessage(formValue: any) {
    this.getMessage();
    this.messageDetailList.push(formValue); // Use unshift() to add the new post as the first entry
  }

}
