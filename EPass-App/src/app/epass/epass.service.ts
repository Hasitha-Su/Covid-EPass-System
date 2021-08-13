import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';

//Get All Citizen
const GET_EPASS = gql`
  query{
    getAllEpass{
      id
      name
    }
  }`
  ;

//create epass
const CREATE_EPASS = gql`mutation {
  createEpass(createEpassInput:{
    name: $epassCategory
    citizenId: $citizenId
  }){
    id
  }
}`;

//delete epass
const DELETE_EPASS = gql`
  mutation removeEpass($id: String!) {
    removeEpass(id: $id) {
      id
    }
}`;


//update epass
//const UPDATE_EPASS = gql``;

@Injectable({
  providedIn: 'root'
})
export class EpassService {

  constructor(private apollo: Apollo) { }

  getEpass() {
 
  }


  // createEpass(){
  //   this.apollo.mutate({
  //     mutation: CREATE_EPASS,
  //     variables: {
  //       name: ,
  //       citizenId: 
  //     }
  //   }).subscribe(({ data }) => {
  //     console.log('got data', data);
  //   },(error) => {
  //     console.log('there was an error sending the query', error);
  //   });
  // }


  deleteEpass(id: string) {
    console.log(id)

    return this.apollo.mutate({
      mutation: DELETE_EPASS,
      variables: {
        id
      },
    })
  }

  // upvote(postId: string) {
  //   return this.apollo.mutate({
  //     mutation: UPVOTE_POST,
  //     variables: {
  //       postId
  //     }
  //   });
  // }


  updateEpass() {

  }


}