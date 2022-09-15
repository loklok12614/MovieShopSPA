import { Component, OnInit } from '@angular/core';
import { GenreService } from '../Services/genre.service';
import { Genre } from 'src/app/Shared/Models/Genre';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private genreService:GenreService) { }

  isGenresEmpty:boolean = true;
  genres!:Genre[]

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe((g:Genre[]) => {
      this.genres = g
      this.isGenresEmpty = this.genres.length == 0 && true
    })
  }

}
