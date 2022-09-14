import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Shared/Models/Movie';
import { MovieDetails } from 'src/app/Shared/Models/Movie-Details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("https://localhost:7246/api/Movies/top-grossing")
  }

  getMovieDetails(movieId:number):Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(`https://localhost:7246/api/Movies/details/${movieId}`)
  }

  getMoviesByGenre(genreId:number){

  }
}
