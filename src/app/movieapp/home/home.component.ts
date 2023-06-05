import { Component, OnInit } from '@angular/core';
import { ServiceMovie } from '../../shared/service/service.service';
import { Movies } from 'src/app/shared/models/movie.interface';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent  implements OnInit {
  allmovies: Array<any> = []
  urlImg: string = "https://image.tmdb.org/t/p/w500"
  filterMovies:Array<any> = []

  constructor(
    public service: ServiceMovie,
    private decimalPipe: DecimalPipe,
    private router: Router
  ) {
   }


  ngOnInit(){
    this.service.getMovies().subscribe((res: any)=>  {
      this.allmovies.push(this.modifyMovies(res.results) )
      this.filterMovies.push(this.modifyMovies(res.results) )
      this.addMovie()
    })


  }

  modifyMovies(data: Array<Movies>){
    let count: number = 10
    data.forEach((value: any) => {
      value.poster_path = this.urlImg+value.poster_path
      value.price = this.decimalPipe.transform(12000+5000, '1.0-0');
      value.inventory = count++
    })
    return data;
  }

  openMovieDetail(movie: object){
    this.service.movieDetail = movie
    this.router.navigate(['/home/detail'])
  }

  addMovie(){
    if(this.service.newMovie != ''){
      this.allmovies[0].push(this.service.newMovie)
    }
  }

  filtrarDatos(event: any){
    let data = event.value
    this.allmovies[0] = this.filterMovies[0].filter((value: any) => value.title.toLowerCase().includes( data || data.toLowerCase()))

  }

}