import { Component, OnInit } from '@angular/core';
import { ServiceMovie } from '../../service/service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  {
  href: string = '/home'
  title: string = 'Detalles de pelicula'
  movieDetail: any
  urlImg: string = "https://image.tmdb.org/t/p/w500"

  constructor(
    public service: ServiceMovie,
  ){
    this.movieDetail = this.service.movieDetail
  }

}
