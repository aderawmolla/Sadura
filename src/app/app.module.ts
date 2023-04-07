import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimatedImageComponent } from './animated-image/animated-image.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { SaysComponent } from './says/says.component';
import { ServicesComponent } from './services/services.component';
import { CarComponent } from './car/car.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimatedImageComponent,
    VideoPlayerComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    FeaturesComponent,
    TeamComponent,
    SaysComponent,
    ServicesComponent,
    CarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
