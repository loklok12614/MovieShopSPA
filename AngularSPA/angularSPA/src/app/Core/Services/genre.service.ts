import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Genre } from 'src/app/Shared/Models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }

  getAllGenres():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>("https://localhost:7246/api/Genres")
  }

  addGenre(genre:Genre){
    // return this.httpClient.post("", genre)
  }

  deleteGenre(id:number){
    return true
  }
  
}
