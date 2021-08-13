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
    id:"", 
    category:"",
    other:""
  };

  categoryList = [
    'E-Pass For Business', 
    'VIP E-Pass',
  ];

  onSubmit() { this.submitted = true; }

  newEpass() { }

}
