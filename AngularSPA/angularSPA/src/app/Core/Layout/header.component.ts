import { Component, OnInit } from '@angular/core';
import { GenreService } from '../Services/genre.service';
import { Genre } from 'src/app/Shared/Models/Genre';
import { User } from 'src/app/Shared/Models/User';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private genreService:GenreService, private accountService:AccountService) { }

  loggedIn:boolean = false
  user:User
  isGenresEmpty:boolean = true;
  genres!:Genre[]

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe((g:Genre[]) => {
      this.genres = g
      this.isGenresEmpty = this.genres.length == 0 && true
    })
    this.accountService.currentUser.subscribe((user:User) => {
      this.user = user
    })

    this.accountService.isLoggedIn.subscribe((isLoggedIn:boolean) => {
      this.loggedIn = isLoggedIn
    })
  }

  logout(): void{
    this.accountService.logout()
  }

}
