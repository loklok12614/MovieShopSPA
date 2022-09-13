import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCastComponent } from './create-cast.component';
import { CreateMovieComponent } from './create-movie.component';
import { TopPurchasesComponent } from './top-purchases.component';

const routes: Routes = [
  {path: "create-movie", component: CreateMovieComponent},
  {path: "create-cast", component: CreateCastComponent},
  {path: "top-purchases", component: TopPurchasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
