import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { EpassService } from '../epass.service';

//get all epasses
const GET_EPASS = gql`
  query{
    getAllEpass{
      id
    }
  }`
  ;

@Component({
  selector: 'app-view-epass',
  templateUrl: './view-epass.component.html',
  styleUrls: ['./view-epass.component.css']
})
export class ViewEpassComponent implements OnInit {

  epassList: any;
  constructor(private apollo: Apollo, private epassService: EpassService) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_EPASS,
      })
      .valueChanges.subscribe((result: any) => {
        this.epassList = result.data.getAllEpass;
        console.log(this.epassList);
        console.log(result.error);
      });
  }

  deleteEpass(id: string){
    console.log(id)
    this.epassService.deleteEpass(id).subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}