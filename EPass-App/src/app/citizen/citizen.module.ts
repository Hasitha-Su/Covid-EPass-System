import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { RequestEpassComponent } from './request-epass/request-epass.component';
import { ViewEpassComponent } from './view-epass/view-epass.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    ProfileUpdateComponent,
    RequestEpassComponent,
    ViewEpassComponent
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports:[
    RegistrationComponent,
    RequestEpassComponent
  ]
})

export class CitizenModule { }