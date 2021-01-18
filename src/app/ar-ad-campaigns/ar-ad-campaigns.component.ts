import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-ar-ad-campaigns',
  templateUrl: './ar-ad-campaigns.component.html',
  styleUrls: ['./ar-ad-campaigns.component.css']
})
export class ArAdCampaignsComponent implements OnInit {
  q1= require("/fs project/Visars/src/assets/images/pf.png");
  constructor() { }

  ngOnInit() {
  }

}
