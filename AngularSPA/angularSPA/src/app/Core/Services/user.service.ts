import { Injectable } from '@angular/core';
import { PurchaseRequest } from 'src/app/Shared/Models/Purchase-Request';
import { HttpClient } from '@angular/common/http';
import { PurchaseSuccess } from 'src/app/Shared/Models/Purchase-Success';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUserPurchasedMovies(){

  }

  getUserFavoritedMovies(){

  }

  getUserReviewedMovies(){

  }

  purchaseMovie(purchaseRequest:PurchaseRequest):Observable<PurchaseSuccess>{
    return this.httpClient.post<PurchaseSuccess>("https://lokmovieshopapi.azurewebsites.net/api/User/purchase-movie", purchaseRequest)
  }

  isMoviePurchased(userId:number, movieId:number):Observable<boolean>{
    const params = {
      "userId": userId
    }
    return this.httpClient.get<boolean>(`https://lokmovieshopapi.azurewebsites.net/api/User/check-movie-purchased/${movieId}`, {params})
  }

  favoriteMovie(){
    
  }
}
