import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Core/Services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PagedObject } from '../Shared/Models/PagedObject';
import { Movie } from '../Shared/Models/Movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  pagedMovies!:PagedObject<Movie>
  isEmpty:boolean = true

  constructor(private activedRoute:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe((qparams:Params) =>{
      const pageSize = 'pageSize' in qparams ? qparams['pageSize'] : 30
      const page = 'page' in qparams ? qparams['page'] : 1
      this.movieService.getAllMovies(pageSize, page).subscribe((pagedDate: PagedObject<Movie>) => {
        this.pagedMovies = pagedDate
        this.isEmpty = this.pagedMovies.data.length == 0 && true
      })
    })
  }

}
