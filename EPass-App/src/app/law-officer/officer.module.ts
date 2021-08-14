import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateEpassComponent } from './authenticate-epass/authenticate-epass.component';
import { ViewEpassComponent } from './view-epass/view-epass.component';
import { ReviewRequestComponent } from './review-request/review-request.component';

@NgModule({
  declarations: [
    ViewEpassComponent,
    AuthenticateEpassComponent,
    ReviewRequestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OfficerModule { }
