import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { MovieDetailsComponent } from './Public/movie-details.component';
import { CastDetailsComponent } from './Public/cast-details.component';
import { MoviesComponent } from './Public/movies.component';
import { GenresComponent } from './Public/genres.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminGuard } from './Core/Guards/admin.guard';
import { AuthGuard } from './Core/Guards/auth.guard';
import { JwtAdderInterceptor } from './Core/Interceptors/jwt-adder.interceptor';
import { AllMoviesComponent } from './Public/all-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    MoviesComponent,
    GenresComponent,
    AllMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAdderInterceptor, multi: true },
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
