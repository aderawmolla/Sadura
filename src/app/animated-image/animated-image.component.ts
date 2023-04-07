import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-image',
  templateUrl: './animated-image.component.html',
  styleUrls: ['./animated-image.component.css']
})
export class AnimatedImageComponent {
  @ViewChild('videoPlayer')
  videoplayer: ElementRef;

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
