import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
//  below 👇 is the example of string interpolation 
  // 18dec
  name:string="Jack";
  serverID:number= 101;
  serverStatus:string= 'online';
  // below 👇 is the example of property binding
  // 18dec
  imageUrl:any="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80";
  isDisabled=true;
  hmtl:any=`<!DOCTYPE html>
  <html>
      <head>
          <title>My web page</title>
      </head>
      <body>
          <h1>Hello, world!</h1>
          <p>This is my first web page.</p>
          <p>It contains a 
               <strong>main heading</strong> and <em> paragraph </em>.
          </p>
      </body>
  </html>
  `;

  // Assignment 18_dec variables👇

  NameS:string="Akshay P"
  Adress:string= "west sea";
  gender:string="Male"


  localImage:any="assets/Image/man-1459246_640.jpg" ;
// ------------------------------------------------------
// 19dec
  count:number=0;
  UserNames:string="The Powerful concept"
  aNE:any="";
  aNE2:any="";
// Assignment variable 19dec👇
  userName2:any=''
  aNE3:string=""

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log("button clicked");
    
  }
  print(){
    alert('print method called');
  }
   // below 👇 is the example of string interpolation
// 18dec
  getServerStatus(){
    return this.serverStatus;
  }
  // below 👇 is the example of event binding
// 19dec
  clickedButton(){
    this.count++
  }
 restClicks(){
  this.count=0;
 }
  // EventPayLoad $event
  dollarEvent(event:any){
    console.log(event.target.innerHTML);
    
  }
// to send an error to html file if user enters values other than the alphanumeric👇
// if you want to match value length as well then please use .test() instead of .match its a humble request👇
  limitType(event:any){

   let data=event.target.value;
 
   if (data.match(/[^a-zA-Z0-9 ]/g)) {
    console.log("yes");
    console.log(`${data} from if part`);
    this.aNE="please enter only number or alphabate";
    
    
   }else{
    console.log("no");
    console.log(`${data} from esle part`);
    this.aNE="";
   }
 
}
// template reference variable
limitType2(event:any){


  let data2=event.value;
 
  if (data2.match(/[^a-zA-Z0-9 ]/g)) {
   console.log("yes");
   console.log(`${data2} from if part`);
   this.aNE2="please enter only number or alphabate";
   
   
  }else{
   console.log("no");
   console.log(`${data2} from esle part`);
   this.aNE2="";
  }
 
}

restText(){
  this.userName2="";
  this.aNE3=(`"Button clicked🎉🎉 !! "Text string is empty"`)
}
DisbableBtn(){
  if (this.userName2.length>=1) {
   return false
   
  }else{
    return true
  }
}
}

