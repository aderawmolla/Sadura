import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  posts: any;
  constructor(private _postService:PostsService){}
  ngOnInit(): void {
    this.getAllPosts();

  }
  getAllPosts(): void {
    this._postService
      .getAllPosts()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.posts=data.reverse();
        console.log(this.posts);
      });
  }

}
