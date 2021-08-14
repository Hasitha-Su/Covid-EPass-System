import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { citizen } from 'src/app/Models/citizen.model';
import { epass } from 'src/app/Models/epass.model';
import { OfficerService } from 'src/app/Services/officer.service';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css']
})
export class ReviewRequestComponent implements OnInit {

  constructor(private route: ActivatedRoute, private officerService: OfficerService) { }

  epasDetails!: epass; 






  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const epassIdFromRoute = String(routeParams.get('id'));

    console.log(epassIdFromRoute)
    this.officerService.getDetailedEpass(epassIdFromRoute).subscribe((result: any) => {
      this.epasDetails = result.data.findEpassById

      console.log(this.epasDetails.citizen!.firstName!);

      // console.log(result.data.findEpassById.citizen);
      // console.log(result.error);
    })
  }
}
