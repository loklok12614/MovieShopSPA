import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './Reusables/movie-card/movie-card.component';



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class SharedModule { }
