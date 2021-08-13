import { Component, OnInit } from '@angular/core';
import { citizen } from '../citizen.model';
import { CitizenService } from '../citizen.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private _citizenService: CitizenService){}

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
      this._citizenService.createCitizen(this.citizenModel).subscribe(({ data }) => {
        console.log('got data', data);
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
    
  }

  // deleteEpass(id: string){
  //   console.log(id)
  //   this.epassService.deleteEpass(id).subscribe(({ data }) => {
  //     console.log('got data', data);
  //   }, (error) => {
  //     console.log('there was an error sending the query', error);
  //   });
  // }

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
