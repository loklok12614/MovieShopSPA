import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateMovieComponent } from '../Admin/create-movie.component';
import { CreateCastComponent } from '../Admin/create-cast.component';
import { TopPurchasesComponent } from '../Admin/top-purchases.component';


@NgModule({
  declarations: [
    CreateMovieComponent,
    CreateCastComponent,
    TopPurchasesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
