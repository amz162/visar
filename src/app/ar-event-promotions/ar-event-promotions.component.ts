import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-ar-event-promotions',
  templateUrl: './ar-event-promotions.component.html',
  styleUrls: ['./ar-event-promotions.component.css']
})
export class ArEventPromotionsComponent implements OnInit {
  q1= require("/fs project/Visars/src/assets/images/ef.png");
  constructor() { }

  ngOnInit() {
  }

}
