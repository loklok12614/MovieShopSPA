import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { MovieDetailsComponent } from './Public/movie-details.component';
import { CastDetailsComponent } from './Public/cast-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    CastDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
