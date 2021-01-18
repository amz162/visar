import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
 

declare var require: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  //try: string="https://www.facebook.com/visarpk";

  ig= require("/fs project/Visars/src/assets/images/ig.png");
  tw=require("/fs project/Visars/src/assets/images/twitter.png");
  ba=require("/fs project/Visars/src/assets/images/ba.png");
  fb=require("/fs project/Visars/src/assets/images/fb.png");
  img=this.ba;
  
  p= require("/fs project/Visars/src/assets/images/p.png");
  ps=require("/fs project/Visars/src/assets/images/ps.png");
  pb=require("/fs project/Visars/src/assets/images/pb.png");
  py=require("/fs project/Visars/src/assets/images/py.png");
  pg=require("/fs project/Visars/src/assets/images/pg.png");
  imgs=this.p;

i1= require("/fs project/Visars/src/assets/images/i1.png");
  i2= require("/fs project/Visars/src/assets/images/i2.png");
  i3= require("/fs project/Visars/src/assets/images/i3.png");
  i4= require("/fs project/Visars/src/assets/images/i4.png");
  i5= require("/fs project/Visars/src/assets/images/i5.png");
  i6= require("/fs project/Visars/src/assets/images/i6.png"); 

  f1= require("/fs project/Visars/src/assets/images/post.png");
  f2= require("/fs project/Visars/src/assets/images/story.png");
  f3= require("/fs project/Visars/src/assets/images/messanger send.png");
  f4= require("/fs project/Visars/src/assets/images/share.png");
  f5= require("/fs project/Visars/src/assets/images/save to gallery.png");
  

  event: string="https://visar.pk/videos/v1.mp4";
  bday: string = "https://visar.pk/videos/v2.mp4";
  cafe: string="https://visar.pk/videos/ads.mp4";
  face: string="https://visar.pk/videos/v4.mp4";
  counter:string="https://visar.pk/videos/v5.mp4";
  

 // btn_event :string= "https://www.facebook.com/visarpk";
  ///btn_bday:string = "https://www.facebook.com/visarpk";
  //btn_cafe:string="https://www.facebook.com/visarpk";
  //btn_face:string= "https://www.facebook.com/visarpk";
 // btn_counter:string= "https://www.facebook.com/visarpk";

  filter:string=this.event;

  constructor(private elRef: ElementRef) { }

  setitem(value:number){

    if(value==1){
      this.filter=this.event;
      this.imgs=this.p;

    }
    else if(value==2){
      this.filter=this.bday;
      this.imgs=this.ps;

    }
    else if(value == 3){
            this.filter=this.cafe;
            this.imgs=this.pb;
    }
    else if(value==4){
      this.filter=this.face;
      this.imgs=this.py;
    }
    else if(value==5){
      this.filter=this.counter;
      this.imgs=this.pg;
    }
    const player = this.elRef.nativeElement.querySelector('video');
  player.load();

  }


  setitems(value:number){
    if(value==1){
      this.img=this.ba;

    }
    else if(value==2){
      this.img=this.fb;

    }
    else if(value == 3){
            this.img=this.ig;
    }
    else if(value==4){
      this.img=this.tw;
    }
  }




  ngOnInit() {
  }

}
