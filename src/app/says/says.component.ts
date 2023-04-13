import { Component } from '@angular/core';
import { map } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-says',
  templateUrl: './says.component.html',
  styleUrls: ['./says.component.css']
})
export class SaysComponent {
  says:any=[];
  constructor(private _postService:PostsService){}
  ngOnInit(): void {
    this.getAllMessages();
  }
  getAllMessages(): void {
    this._postService
      .getAllMessages()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.says=data.reverse();
        console.log(this.says);
      });
  }
}
