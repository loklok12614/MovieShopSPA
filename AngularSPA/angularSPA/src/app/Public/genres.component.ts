import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Core/Services/movie.service';
import { Movie } from '../Shared/Models/Movie';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  movies!:Movie[];
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
  }

}
