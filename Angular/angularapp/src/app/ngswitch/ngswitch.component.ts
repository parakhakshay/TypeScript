import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  selectProduct:any="";
  constructor() { }

  ngOnInit(): void {
  }
  getProductValue(val:any){
    console.log(val.target.value)
    this.selectProduct= val.target.value;
  }
}
