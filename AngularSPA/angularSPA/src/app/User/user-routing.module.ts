import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile.component';
import { FavoritesComponent } from './favorites.component';
import { PurchasesComponent } from './purchases.component';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {path: "edit-profile", component: EditProfileComponent},
  {path: "favorites", component: FavoritesComponent},
  {path: "purchases", component: PurchasesComponent},
  {path: "reviews", component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
