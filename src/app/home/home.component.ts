import { Component, OnInit } from '@angular/core';

declare var require: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  q1= require("/fs project/Visars/src/assets/images/arf.png");
  q2= require("/fs project/Visars/src/assets/images/gf.png");
  q3= require("/fs project/Visars/src/assets/images/epf.png");
  q4= require("/fs project/Visars/src/assets/images/pfs.png");
  q5= require("/fs project/Visars/src/assets/images/pmf.png");
  q6= require("/fs project/Visars/src/assets/images/cb.png");

c1= require("/fs project/Visars/src/assets/images/cg.png");
c2= require("/fs project/Visars/src/assets/images/lc.png");
  


  constructor() { }

  ngOnInit() {

  }

}
