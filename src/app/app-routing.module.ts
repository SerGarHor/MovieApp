import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component'
import { HomeComponent } from './movieapp/home/home.component';
import { DetailComponent } from './shared/components/detail/detail.component';
import { CreateMovieComponent } from './movieapp/create-movie/create-movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crear',
    component: CreateMovieComponent
  },
  {
    path: 'home/detail',
    component: DetailComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
