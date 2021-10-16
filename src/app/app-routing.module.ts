import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVideosComponent } from './site-layout/all-videos/all-videos.component';
import { HomeComponent } from './site-layout/home/home.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: "home"},
  {path:'home',component:HomeComponent},
  {path:'all-videos', component:AllVideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
