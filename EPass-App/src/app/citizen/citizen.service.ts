import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { citizen } from './citizen.model';


//create citizen
const CREATE_CITIZEN = gql`
  mutation CreateCitizen( $citizenObj: CreateCitizenInput!) {
    CreateCitizen( citizenCreateDto: $citizenObj) {
      id
    }
  }
`;

//delete citizen
// const DELETE_CITIZEN = gql`{}`;

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  constructor(private _apollo: Apollo) { }

  createCitizen(citizenObj: citizen) {
    console.log(citizenObj)
    return this._apollo.mutate({
      mutation: CREATE_CITIZEN,
      variables:{ citizenObj },
    })
  }

  // deleteCitizen(id: string) {
  //   return this.apollo.mutate({
  //     mutation: DELETE_CITIZEN,
  //     variables: {
  //       id
  //     },
  //   })
  // }

}
