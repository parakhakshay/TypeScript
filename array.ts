// collection of different arrays in the form of different datatypes

let arra1:boolean[]=[];
let arra2:boolean[]=new Array();
let arra3: boolean[]=Array();

let arra4: Array<boolean>=[];
let arra5:Array<boolean>= new Array();


// array types homogenous (same data type values )

var homoArr: Array<string> = ['Angular','JavaScript',"React"];
// we can use for loop to traverse the array
// for of vs for in: 
// for in is iterate in strings of object
// for of iterates over the values array
//  heterogenous (multiple data types values)



// for in returns object (keys)
for (const key in homoArr) {
    console.log((`'by using for in method', ${homoArr[key]}`));
    
}


// for of returns values
for (const iterator of homoArr) {
    console.log((`'by using for of method', ${iterator}`));
}

// in most of the cases
// for in object
// for of in array

// compile time error: errors we are getting during the building the app or site is know as compile time error
// runtime error: error we are getting while using on already running website/ app is known as runtime error

// heterogenous array


var hetroArr: Array<any> =['Kantara',101,true];
console.log(hetroArr);

