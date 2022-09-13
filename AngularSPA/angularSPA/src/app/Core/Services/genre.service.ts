import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { GenreModel } from 'src/app/Shared/Models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }

  getAllGenres():Observable<GenreModel>{
    return this.httpClient.get<GenreModel[]>("")
  }
  
}
