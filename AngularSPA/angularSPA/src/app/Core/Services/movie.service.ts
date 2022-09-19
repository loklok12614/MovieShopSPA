import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Shared/Models/Movie';
import { MovieDetails } from 'src/app/Shared/Models/Movie-Details';
import { PagedObject } from 'src/app/Shared/Models/PagedObject';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("https://lokmovieshopapi.azurewebsites.net/api/Movies/top-grossing")
  }

  getMovieDetails(movieId:number):Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(`https://lokmovieshopapi.azurewebsites.net/api/Movies/details/${movieId}`)
  }

  getMoviesByGenre(genreId:number, pageSize:number, page:number):Observable<PagedObject<Movie>>{
    const params = new HttpParams().set('pageSize', pageSize).set('page', page)
    return this.httpClient.get<PagedObject<Movie>>(`https://lokmovieshopapi.azurewebsites.net/api/Movies/genre/${genreId}`, {params})
  }
}
