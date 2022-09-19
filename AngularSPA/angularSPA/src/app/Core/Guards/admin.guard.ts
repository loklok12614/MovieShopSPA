import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';
import { User } from 'src/app/Shared/Models/User';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  loggedIn:boolean = false
  isAdmin:string = "false"

  constructor(private accountService:AccountService){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.isAdmin = "false"
      this.loggedIn = false

      this.accountService.isLoggedIn.subscribe((isLoggedIn:boolean) => {
        this.loggedIn = isLoggedIn
      })

      this.accountService.currentUser.subscribe((data:User) => {
        this.isAdmin = data.isAdmin
      })

      if( localStorage.getItem('token') != null && this.loggedIn && this.isAdmin == "true" ){
        return true
      } else{
        return false
      }
  }
}
