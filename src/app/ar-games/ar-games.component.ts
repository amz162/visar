import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-ar-games',
  templateUrl: './ar-games.component.html',
  styleUrls: ['./ar-games.component.css']
})
export class ArGamesComponent implements OnInit {
  q1= require("/fs project/Visars/src/assets/images/gamefilter.png");
  constructor() { }

  ngOnInit() {
  }

}
