import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCastComponent } from './create-cast.component';
import { CreateMovieComponent } from './create-movie.component';
import { TopPurchasesComponent } from './top-purchases.component';
import { AddGenreComponent } from './add-genre.component';
import { AddCastComponent } from './add-cast.component';
import { AllGenresComponent } from './all-genres.component';

const routes: Routes = [
  {path: "create-movie", component: CreateMovieComponent},
  {path: "create-cast", component: CreateCastComponent},
  {path: "top-purchases", component: TopPurchasesComponent},
  {path: "add-genre", component: AddGenreComponent},
  {path: "add-cast", component: AddCastComponent},
  {path: "all-genres", component: AllGenresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
