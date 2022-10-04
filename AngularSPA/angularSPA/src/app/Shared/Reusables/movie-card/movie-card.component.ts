import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() public movie:Movie

  constructor() { }

  ngOnInit(): void {
  }

}
