import { Component } from '@angular/core';
import { map } from 'rxjs';
import { PostsService } from '../posts.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-says',
  templateUrl: './says.component.html',
  styleUrls: ['./says.component.css'],
  animations: [
    trigger('carouselAnimation', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.5s ease-in-out')
      ]),
      transition('* => void', [
        animate('0.5s ease-in-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ]
})

export class SaysComponent {

  animationState = 'in'; // Initialize the animation state as 'in'

  // Method to trigger the animation
  startAnimation() {
    this.animationState = this.animationState === 'in' ? 'out' : 'in';
  }
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
