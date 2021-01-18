import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-page-management',
  templateUrl: './page-management.component.html',
  styleUrls: ['./page-management.component.css']
})
export class PageManagementComponent implements OnInit {
  q1= require("/fs project/Visars/src/assets/images/PM.png");
  constructor() { }

  ngOnInit() {
  }

}
