import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEpassComponent } from './law-officer/view-epass/view-epass.component';
import { RequestEpassComponent } from './citizen/request-epass/request-epass.component';
import { RegistrationComponent } from './citizen/registration/registration.component';
import { AuthenticateEpassComponent } from './law-officer/authenticate-epass/authenticate-epass.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReviewRequestComponent } from './law-officer/review-request/review-request.component';

const routes: Routes = [
  { path: 'epass/viewAll', component: ViewEpassComponent },
  { path: 'epass/request', component: RequestEpassComponent },
  { path: 'epass/authentiacte', component: AuthenticateEpassComponent },
  { path: 'epass/:id', component: ReviewRequestComponent },

  { path: 'citizen/signup', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }