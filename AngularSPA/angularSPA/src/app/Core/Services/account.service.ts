import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs'
import { HttpClient } from '@angular/common/http';

import { Login } from 'src/app/Shared/Models/Login';
import { Register } from 'src/app/Shared/Models/Register';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  private currentUserSubject = new BehaviorSubject<any>({} as any)
  public currentUser = this.currentUserSubject.asObservable()

  private isLoggedInSubject = new BehaviorSubject<boolean>(false)
  public isLoggedIn = this.isLoggedInSubject.asObservable()

  login(loginData:Login):Observable<boolean>{
    return this.httpClient.post<boolean>("https://lokmovieshopapi.azurewebsites.net/api/account/login", loginData)
    .pipe(map((response:any) => {
      if(response){
        localStorage.setItem('token', response.token)
        return true
      }
      return false
    }))
  }

  logout(){
    localStorage.removeItem('token')
  }

  register(registerData:Register):Observable<boolean>{
    return this.httpClient.post<boolean>("https://lokmovieshopapi.azurewebsites.net/api/account/register", registerData)
    .pipe(map((response:any) => {
      if(response){
        return true
      }
      return false
    }))
  }
  
}
