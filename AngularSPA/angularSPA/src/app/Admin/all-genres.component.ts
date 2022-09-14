import { Component, OnInit } from '@angular/core';
import { Genre } from '../Shared/Models/Genre';
import { GenreService } from '../Core/Services/genre.service';

@Component({
  selector: 'app-all-genres',
  templateUrl: './all-genres.component.html',
  styleUrls: ['./all-genres.component.css']
})
export class AllGenresComponent implements OnInit {

  deleteFlag:boolean = false;
  genres!:Genre[];
  constructor(private genresService:GenreService) { }

  ngOnInit(): void {
    this.genresService.getAllGenres().subscribe((g:Genre[]) => {
      this.genres = g
    })
  }

  deleteGenre(id:number){
    if (this.genresService.deleteGenre(id)){
      this.deleteFlag = true;
    }
  }

}
