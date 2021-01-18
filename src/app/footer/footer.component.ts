import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fb= require("/fs project/Visars/src/assets/images/facebook.png");
  insta= require("/fs project/Visars/src/assets/images/instagram.png");
  youtube= require("/fs project/Visars/src/assets/images/youtube.png"); 
  faenvelope = faEnvelope;
  fahome=faHome;
  faphone=faPhoneAlt;

  constructor() { }

  ngOnInit() {
  }

}
