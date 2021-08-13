import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEpassComponent } from './view-epass/view-epass.component';
import { RequestEpassComponent } from './request-epass/request-epass.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewEpassComponent,
    RequestEpassComponent
  ],
  exports:[
    ViewEpassComponent,
    RequestEpassComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class EpassModule {}