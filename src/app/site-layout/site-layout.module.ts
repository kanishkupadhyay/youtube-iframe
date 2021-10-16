import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanishkNavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AllVideosComponent } from './all-videos/all-videos.component';
import { AllMusicComponent } from './all-music/all-music.component';
import {RouterModule} from '@angular/router';
import { SafePipe } from './safe.pipe'
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    KanishkNavbarComponent,
    HomeComponent,
    AllVideosComponent,
    AllMusicComponent,
    SafePipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule
  ],
  exports:[
    KanishkNavbarComponent,
    HomeComponent,
    AllVideosComponent,
    FooterComponent
  ]
})
export class SiteLayoutModule { }
