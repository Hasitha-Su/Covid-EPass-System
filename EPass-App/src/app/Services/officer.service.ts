import { Injectable, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { epass } from '../Models/epass.model';

//get pending epasses 
const GET_PENDING_EPASS = gql`
  query {
  filterByStatus(status: "PENDING") {
    id
    category
    status
  }
}`;

//get epass with citizen details by id
const GET_DETAILED_EPASS = gql`
  query findEpassById($id:String!){
    findEpassById(id: $id){
    id
    status
    category
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

  //get pending epasses 
  getPending() {
    return this._apollo
      .watchQuery({
        query: GET_PENDING_EPASS,
      }).valueChanges
  }

  //get epass with citizen details by id
  getDetailedEpass(id:string) {
    return this._apollo
      .watchQuery({
        query: GET_DETAILED_EPASS,
        variables: {
          id
        }
      }).valueChanges
  }
}