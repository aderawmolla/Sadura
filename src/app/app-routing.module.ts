import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'add', component:AddeventComponent},
  { path: 'home', component:HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
