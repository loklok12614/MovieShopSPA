import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  loggedIn:boolean = false

  constructor(private accountService:AccountService, private router:Router){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.accountService.isLoggedIn.subscribe((isLoggedIn:boolean) => {
        this.loggedIn = isLoggedIn
      })

      if( localStorage.getItem('token') == null || !this.loggedIn ){
        return this.router.parseUrl('account/login') //if not authenticated, redirrect to login
        // return false
      }
      return true
  }
  
}
