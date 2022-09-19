import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Core/Services/movie.service';
import { Movie } from '../Shared/Models/Movie';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest } from 'rxjs'
import { PagedObject } from '../Shared/Models/PagedObject';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  // genreId!:number
  pagedMovies!:PagedObject<Movie>;
  isEmpty:boolean = true
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params:any) => {
      const genreId = params['genreId']
      const pageSize = (params['pageSize']) ? parseInt(params['pageSize']) : 30
      const page = 'page' in params ? parseInt(params['page']) : 1
      console.log(page)
      this.movieService.getMoviesByGenre(genreId, pageSize, page).subscribe((pagedData: PagedObject<Movie>) => {
        this.pagedMovies = pagedData
        this.isEmpty = this.pagedMovies.data.length == 0 && true
      })
    })

    combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams])
        .subscribe(([params, qparams]:[Params, Params]) => {
          const genreId = params['genreId']
          const pageSize = 'pageSize' in qparams ? qparams['pageSize'] : 30
          const page = 'page' in qparams ? qparams['page'] : 1
          this.movieService.getMoviesByGenre(genreId, pageSize, page).subscribe((pagedData: PagedObject<Movie>) => {
            this.pagedMovies = pagedData
            this.isEmpty = this.pagedMovies.data.length == 0 && true
          })
        })
  }

}
