import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  blogDetails: any;

  constructor(private sharedDataSrv: SharedDataService) { }

  ngOnInit() {
    this.blogDetails = JSON.parse(localStorage.getItem('item'));
  }

}
