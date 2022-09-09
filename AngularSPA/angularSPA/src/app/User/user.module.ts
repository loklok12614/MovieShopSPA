import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PurchasesComponent } from '../User/purchases.component';
import { FavoritesComponent } from '../User/favorites.component';
import { ReviewsComponent } from '../User/reviews.component';
import { EditProfileComponent } from '../User/edit-profile.component';


@NgModule({
  declarations: [
    PurchasesComponent,
    FavoritesComponent,
    ReviewsComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
