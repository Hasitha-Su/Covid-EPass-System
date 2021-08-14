import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficerService } from 'src/app/Services/officer.service';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css']
})
export class ReviewRequestComponent implements OnInit {

  constructor(private route: ActivatedRoute, private officerService: OfficerService) { }

    //detailedEpass

    ngOnInit() {

      const routeParams = this.route.snapshot.paramMap;
      const epassIdFromRoute = String(routeParams.get('id'));

      // this.detailedEpass = products.find(product => product.id === productIdFromRoute);
      console.log(epassIdFromRoute)
      this.officerService.getDetailedEpass(epassIdFromRoute).subscribe((result:any) => {
        console.log(result.data.findEpassById);
        console.log(result.error);
      })
  }
}
