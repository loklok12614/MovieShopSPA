import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt'

import { Login } from 'src/app/Shared/Models/Login';
import { Register } from 'src/app/Shared/Models/Register';
import { User } from 'src/app/Shared/Models/User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient, private router:Router) { }

  public redirectUrl: string

  private currentUserSubject = new BehaviorSubject<User>({} as User)
  public currentUser = this.currentUserSubject.asObservable()

  private isLoggedInSubject = new BehaviorSubject<boolean>(false)
  public isLoggedIn = this.isLoggedInSubject.asObservable()

  jwtHelper = new JwtHelperService()

  login(loginData:Login):Observable<boolean>{
    return this.httpClient.post<boolean>("https://lokmovieshopapi.azurewebsites.net/api/account/login", loginData)
    .pipe(map((response:any) => {
        localStorage.setItem('token', response.token)
        this.getUserInfoFromToken()

        if(this.redirectUrl){
          console.log(`Service url: ${this.redirectUrl}`)
          this.router.navigate([this.redirectUrl])
          this.redirectUrl = ""
          return true
        }
        else{
          this.router.navigate(['/'])
          return true
        }
    }))
  }

  logout(){
    localStorage.removeItem('token')
    this.currentUserSubject.next({} as User)
    this.isLoggedInSubject.next(false)
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

  getUserInfoFromToken(){
    var token = localStorage.getItem('token')
    if(token && this.jwtHelper.decodeToken(token)){
      const decodedToken = this.jwtHelper.decodeToken(token)
      this.isLoggedInSubject.next(true)
      this.currentUserSubject.next(decodedToken)
    }
  }

  validateJWT(){
    var token = localStorage.getItem('token')
    if(token && this.jwtHelper.decodeToken(token)){
      const decodedToken = this.jwtHelper.decodeToken(token)
      this.isLoggedInSubject.next(true)
      this.currentUserSubject.next(decodedToken)
    }
  }
}
