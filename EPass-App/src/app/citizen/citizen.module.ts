import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports:[
    RegistrationComponent
  ]
})

export class CitizenModule { }