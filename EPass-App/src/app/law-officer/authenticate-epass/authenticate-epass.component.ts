import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { epass } from 'src/app/Models/epass.model';
import { OfficerService } from 'src/app/Services/officer.service';

@Component({
  selector: 'app-authenticate-epass',
  templateUrl: './authenticate-epass.component.html',
  styleUrls: ['./authenticate-epass.component.css']
})
export class AuthenticateEpassComponent implements OnInit {

  pendingEpass!: epass[];

  constructor(private _router: Router, private _officerService: OfficerService) { }

  ngOnInit() {

    this._officerService.getPending().subscribe((result: any) => {
      this.pendingEpass = result.data.filterByStatus;
      console.log(this.pendingEpass);
      console.log(result.error);
    });
  }
}
