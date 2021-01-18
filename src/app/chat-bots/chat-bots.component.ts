import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-chat-bots',
  templateUrl: './chat-bots.component.html',
  styleUrls: ['./chat-bots.component.css']
})
export class ChatBotsComponent implements OnInit {
  q1= require("/fs project/Visars/src/assets/images/chatbot main.png");
  constructor() { }

  ngOnInit() {
  }

}
