import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  q1= require("/fs project/Visars/src/assets/images/logo2.png");
  constructor() { }

  ngOnInit() {
  }

}
