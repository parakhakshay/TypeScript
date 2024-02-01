import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // input decorator property
  // below 👇line is the input decorator without the alias name
  // @Input() message :string | undefined;
  // below 👇line is the input decorator with the alias name
    @Input("childProp") message:string | undefined;
    // below 👇 is the output decorator 
    // it's used to emit an event from this component back to its parent component
    // newPrice is the output decorator property
    @Output() public newPrice= new EventEmitter<any>();

  constructor() {;
   }
// this ngOnInIt is the live hook which executed once when all the DOM element is loaded
  ngOnInit(): void {

    console.log(`value comes from Parent component`, this.message)
  }

  onChange(value:any){
console.log(value);
    this.newPrice.emit(value)
  }

}
