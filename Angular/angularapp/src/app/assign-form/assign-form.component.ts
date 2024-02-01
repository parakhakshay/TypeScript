import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign-form',
  templateUrl: './assign-form.component.html',
  styleUrls: ['./assign-form.component.css']
})
export class AssignFormComponent implements OnInit {
  email:any='';
  name:string="";
  Num="";
  password="";
  SelectCourse="";
  
  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(form:NgForm){
    console.log(form.value);
        // api login(form.value)👈 server will do serverSide Validation
      }

}
