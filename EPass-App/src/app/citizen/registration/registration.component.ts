import { Component, OnInit } from '@angular/core';
import { citizen } from '../citizen.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  citizenModel: citizen = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address_1: '',
    address_2: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.citizenModel)
  }

  newCitizen() {

    this.citizenModel = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address_1: '',
      address_2: ''
    };
  }
}
