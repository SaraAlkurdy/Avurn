import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  blogDetails: any;

  constructor(private sharedDataSrv: SharedDataService) { }

  ngOnInit() {
    this.blogDetails = JSON.parse(localStorage.getItem('item'));
  }

}
