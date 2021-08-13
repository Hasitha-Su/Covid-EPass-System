import { Component, OnInit } from '@angular/core';
import { epass } from '../EPass.model';

@Component({
  selector: 'app-request-epass',
  templateUrl: './request-epass.component.html',
  styleUrls: ['./request-epass.component.css']
})
export class RequestEpassComponent {

  submitted = false;

  constructor() { }

  //epassModel!: epass;
  epassModel: epass = {
    id: "",
    category: "",
    other: "",
    status: ''
  };

  categoryList = [
    'COVID-19: Essential Services',
    'Health Service',
  ];

  onSubmit() { this.submitted = true; }

  newEpass() {
    this.epassModel = { id: "",
    category: "",
    other: "",
    status: ''};
  }
}