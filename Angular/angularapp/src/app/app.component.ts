import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  sendData="the data is coming from parent component";
  ObjectData={
    EmployeeId:"1",
    Name:"John Doe",
    age:30,
    city:"New York",
    company:"AmbientTech",
    salary:"7LPA"
    };
    price:any
    getDataFromChild(val:any){
      console.log("value coming from output child", val);
      this.price= val;
    };
  
    getData(val:any){
      console.log("valsf",val);
      this.ObjectDataOutput
      
    }

    ObjectDataOutput={
      Name:"Anddy",
      techStack:"Angular",
      department:"IT"
    }


  }
  

