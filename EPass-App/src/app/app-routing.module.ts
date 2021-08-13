import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEpassComponent } from './epass/view-epass/view-epass.component';
import { RequestEpassComponent } from './epass/request-epass/request-epass.component';
import { RegistrationComponent } from './citizen/registration/registration.component';
import { AuthenticateEpassComponent } from './law-officer/authenticate-epass/authenticate-epass.component';

const routes: Routes = [
  { path: 'epass/viewAll', component: ViewEpassComponent },
  { path: 'epass/request', component: RequestEpassComponent },
  { path: 'epass/authentiacte', component: AuthenticateEpassComponent },

  { path: 'citizen/signup', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }