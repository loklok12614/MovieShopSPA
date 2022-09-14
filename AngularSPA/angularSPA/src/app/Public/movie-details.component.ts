import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieDetails } from '../Shared/Models/Movie-Details';
import { MovieService } from '../Core/Services/movie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id!:number
  movieDetails!:MovieDetails
  
  constructor(private route:ActivatedRoute, private movieService:MovieService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('movieId')!);
    this.movieService.getMovieDetails(this.id).subscribe((m:MovieDetails) => {
      this.movieDetails = m
    })
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
