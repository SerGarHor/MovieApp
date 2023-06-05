import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceMovie {
  movieDetail: Object
  newMovie: Object = ''

  constructor(
    private http:HttpClient 
  ) { }



  getMovies(): Observable<Object> {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTAxOGQ0NjQ1ZDJmMTMxODVjNzk0YzdjZWZjYjJjOSIsInN1YiI6IjY0N2MwNjNjMTc0OTczMDEzNTAxYTUwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r5KghBJE3E9Mu8UoJLHDoxS3jxeSbdrf3KprxFEVkUY'
    }
  };
   return this.http.get<Movies>('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options)
  }

  createMovie(data: object){
    this.newMovie = data
  } 



}
