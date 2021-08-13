import { Injectable, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { epass } from '../Models/epass.model';

const GET_PENDING_EPASS = gql`
  query{
    getAllEpass{
      id
      category
      status
      other
    }
  }`
  ;

@Injectable({
  providedIn: 'root'
})
export class OfficerService implements OnInit  {

  epassList: epass = {
    id: '',
    category: '',
    status: '',
    other: ''
  };

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_PENDING_EPASS,
      })
      .valueChanges.subscribe((result: any) => {
        this.epassList = result.data.getAllEpass;
        console.log(this.epassList);
        console.log(result.error);
      });
  }
}
