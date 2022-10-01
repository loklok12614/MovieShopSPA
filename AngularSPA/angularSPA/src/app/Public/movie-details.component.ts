import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MovieDetails } from '../Shared/Models/Movie-Details';
import { MovieService } from '../Core/Services/movie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../Core/Services/account.service';
import { UserService } from '../Core/Services/user.service';
import { combineLatest } from 'rxjs'

import { PurchaseRequest } from '../Shared/Models/Purchase-Request';
import { User } from '../Shared/Models/User';
import { PurchaseSuccess } from '../Shared/Models/Purchase-Success';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @ViewChild('purchaseSuccessModal') purchaseSuccessModal : ElementRef // Get reference of purchaseSuccessModal from template

  id!:number
  movieDetails!:MovieDetails
  loggedIn:boolean = false
  user:User

  purchaseSuccessDetails!:PurchaseSuccess
  isMoviePurchased:boolean = false

  purchaseError:boolean = false
  purchaseErrorMessage:string
  
  constructor(private route:ActivatedRoute, 
    private movieService:MovieService, 
    private modalService: NgbModal,
    private accountService: AccountService,
    private userService: UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('movieId')!);
    // this.movieService.getMovieDetails(this.id).subscribe((m:MovieDetails) => {
    //   this.movieDetails = m
    //   this.checkMoviePurchased(Number(this.user.nameid), this.movieDetails.id)
    // })

    // this.accountService.currentUser.subscribe((user:User) => {
    //   this.user = user
    // })

    // this.accountService.isLoggedIn.subscribe((isLoggedIn:boolean) => {
    //   this.loggedIn = isLoggedIn
    // })

    combineLatest([this.movieService.getMovieDetails(this.id), this.accountService.currentUser, this.accountService.isLoggedIn])
        .subscribe(([m, user, isLoggedIn]:[MovieDetails, User, boolean]) => {
          this.movieDetails = m
          this.user = user
          this.loggedIn = isLoggedIn

          if(this.user.nameid && this.movieDetails.id){
            this.checkMoviePurchased(Number(this.user.nameid), this.movieDetails.id)
          }
        })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  purchase(){
    if(!this.loggedIn){
      this.modalService.dismissAll()
      this.router.navigateByUrl(`/account/login`)
    }

    else{ //Purchase
      const purchaseRequest:PurchaseRequest = {
        movieId: this.movieDetails.id,
        userId: Number(this.user.nameid),
        totalPrice: this.movieDetails.price
      }
      this.userService.purchaseMovie(purchaseRequest).subscribe(
        (purchaseSuccessDetails:PurchaseSuccess) => { // Purchase Successful
          this.purchaseSuccessDetails = purchaseSuccessDetails
          this.isMoviePurchased = true
          this.modalService.dismissAll()
          this.open(this.purchaseSuccessModal) // Display purchase success modal
        },
        (err: HttpErrorResponse) => {
          this.purchaseError = true
          this.purchaseErrorMessage = err.error.errorMessage
          console.log(err.error.errorMessage)
        }
      )
    }
  }

  checkMoviePurchased(userId:number, movieId:number){
    this.userService.isMoviePurchased(userId, movieId)
    .subscribe((isMoviePurchased:boolean) => {
      this.isMoviePurchased = isMoviePurchased
      console.log(this.isMoviePurchased)
    })
  }

}
