import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-ar-filters',
  templateUrl: './ar-filters.component.html',
  styleUrls: ['./ar-filters.component.css']
})
export class ARFiltersComponent implements OnInit {
  q1= require("/fs project/Visars/src/assets/images/arfilter.png");
  constructor() { }

  ngOnInit() {
  }

}
