import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/Shared/Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getTopGrossingMovies():Observable<MovieModel[]>{
    return this.httpClient.get<MovieModel[]>("https://localhost:7246/api/Movies/top-grossing")
  }

  getMovieDetails(movieId:number){

  }

  getMoviesByGenre(genreId:number){

  }
}
