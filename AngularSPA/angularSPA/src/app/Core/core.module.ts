import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Core/Layout/header.component';
import { FooterComponent } from '../Core/Layout/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
