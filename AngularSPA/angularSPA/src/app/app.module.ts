import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { MovieDetailsComponent } from './Public/movie-details.component';
import { CastDetailsComponent } from './Public/cast-details.component';
import { MoviesComponent } from './Public/movies.component';
import { GenresComponent } from './Public/genres.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    MoviesComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
