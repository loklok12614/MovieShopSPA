import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './Public/movies.component';
import { GenresComponent } from './Public/genres.component';
import { MovieDetailsComponent } from './Public/movie-details.component'
import { CastDetailsComponent } from './Public/cast-details.component'
import { AuthGuard } from './Core/Guards/auth.guard';
import { AdminGuard } from './Core/Guards/admin.guard';
import { AllMoviesComponent } from './Public/all-movies.component';

const routes: Routes = [
  {path: "", component: MoviesComponent},
  {path: "all-movies", component: AllMoviesComponent},
  {path: "genre/:genreId", component: GenresComponent},
  {path: "movie-details/:movieId", component: MovieDetailsComponent},
  {path: "cast-details/:castId", component: CastDetailsComponent},

  // Lazy loading
  {path: "account", loadChildren: () => import("./Account/account.module").then(mod => mod.AccountModule)},
  {path: "user", loadChildren: () => import("./User/user.module").then(mod => mod.UserModule), canActivateChild: [AuthGuard]},
  {path: "admin", loadChildren: () => import("./Admin/admin.module").then(mod => mod.AdminModule), canLoad: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
