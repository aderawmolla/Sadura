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
import { CarComponent } from './car/car.component';
import { TestComponent } from './test/test.component';
import { CompaniesComponent } from './companies/companies.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './posts.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AddeventComponent } from './addevent/addevent.component';
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
    CarComponent,
    TestComponent,
    CompaniesComponent,
    HomeComponent,
    AddeventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    //here takes me almost 7 hours
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AngularFireStorage, // Add AngularFireStorage as a provider
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
