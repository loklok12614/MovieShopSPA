import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Genre } from 'src/app/Shared/Models/Genre';
import { GenreCreate } from 'src/app/Shared/Models/Genre-Create';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }

  getAllGenres():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>("https://lokmovieshopapi.azurewebsites.net/api/Genres")
  }

  addGenre(genre:GenreCreate){
    return this.httpClient.post("https://lokmovieshopapi.azurewebsites.net/api/admin/add-genre", genre)
    
  }

  deleteGenre(id:number){
    return true
  }
  
}
