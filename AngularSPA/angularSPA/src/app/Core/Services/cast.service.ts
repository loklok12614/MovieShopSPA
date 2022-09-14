import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CastDetails } from 'src/app/Shared/Models/Cast-Details';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  castDetails!:CastDetails

  constructor(private httpClient:HttpClient) { }

  getCastDetails(castId:number):Observable<CastDetails>{
    return this.httpClient.get<CastDetails>(`https://localhost:7246/api/Cast/details/${castId}`)
  }
}
