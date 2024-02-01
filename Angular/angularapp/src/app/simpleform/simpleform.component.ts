import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  email:any='';
  confirmPassword:any="";
  defaultCourse:string="Angular";
  genders=[
    {
      id:1,
      value:"Male"
    },
    {
      id:2,
      value:"Female"
    },
  ]
  isSubmitted:boolean=false;
  employee= new Employee();
  msgPassMatch="";
  defaultGender="Male"
  constructor() { }

  ngOnInit(): void {
  }

  onReset(myForm:NgForm){

    myForm.reset();
    this.isSubmitted=false;
    this.defaultGender="Male";  
    this.defaultCourse="Angular";

  }

  OnSubmit(form:NgForm){
console.log(form.value);
this.isSubmitted=true;
    // api login(form.value)👈 server will do serverSide Validation

    this.employee.email=form.value.userDetails.email;
    this.employee.password=form.value.userDetails.password;
    this.employee.confirmPassword=form.value.userDetails.confirmPassword;
    this.employee.course=form.value.userDetails.course;
    this.employee.gender=form.value.userDetails.gender;


    const pass=this.employee.password=form.value.userDetails.password;
    const conPass=this.employee.password=form.value.userDetails.confirmPassword;

    if (pass===conPass) {
      this.msgPassMatch="password match"
      
    }else(
      this.msgPassMatch="password not match",
      this.isSubmitted=false
      
    );
    
   
    
    // api saveEmployee(employee);

}
}