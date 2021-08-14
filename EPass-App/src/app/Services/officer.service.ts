import { Injectable, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { epass } from '../Models/epass.model';

const GET_PENDING_EPASS = gql`
  query {
  filterByStatus(status: "PENDING") {
    id
    category
    status
    citizen{
      id
      firstName
      lastName
      email
      address_1
      address_2
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  epassList!: epass[]

  constructor(private _apollo: Apollo) { }

  getPending() {
    return this._apollo
      .watchQuery({
        query: GET_PENDING_EPASS,
      }).valueChanges
  }

  changeStatus(){
    
  }
}
