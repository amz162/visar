import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {


  q1= require("/fs project/Visars/src/assets/images/ef.png");
  q2= require("/fs project/Visars/src/assets/images/PM.png");
  q3= require("/fs project/Visars/src/assets/images/pf.png");
  q4= require("/fs project/Visars/src/assets/images/chatbot main.png");
  q5= require("/fs project/Visars/src/assets/images/gamefilter.png");
  q6= require("/fs project/Visars/src/assets/images/arfilter.png");

  constructor() { }

  ngOnInit() {
  }

}
