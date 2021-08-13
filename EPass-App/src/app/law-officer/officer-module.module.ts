import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficerComponent } from './officer/officer.component';
import { AuthenticateEpassComponent } from './authenticate-epass/authenticate-epass.component';



@NgModule({
  declarations: [
    OfficerComponent,
    AuthenticateEpassComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OfficerModuleModule { }
