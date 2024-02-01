import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() Msg2:string | any  ;
  @Output() public newObject = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(`value comes from Parent component`, this.Msg2)
    
    
  }
  onChange2(value:any){
    this.newObject.emit(value)
  }


}
