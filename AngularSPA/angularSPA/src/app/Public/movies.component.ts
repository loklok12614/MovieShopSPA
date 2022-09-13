import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Core/Services/movie.service';
import { MovieModel } from '../Shared/Models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!:MovieModel[];
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getTopGrossingMovies().subscribe((m: MovieModel[]) => {
      this.movies = m
      console.log(this.movies)
    })
  }

}
