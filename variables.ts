

var x: number;
var x = 101;

console.log(x);

// now transpile the ts code into js code
// use terminal and write tsc filename.ts


// if want to run js code in browser the:
// use <srcipt> tag

const mynum='3';
console.log(2+parseInt(mynum));
// stirng
var s1: string = "you are the creator of your on destiny";
var s2: string= `powerful people comes from powerful places`

console.log(s1);
console.log(s2);

var s3: string =`hello, right opportunity came from God, u need to take it`;

console.log(s3);

// string---> we use ts string to store text data and its primitive data type in ts
// boolean datatype is simple in the form of true or false
// helps us in conditions statements
// primitive data type



// boolean

var b1: boolean = true;
var b2: boolean = false;
var b3: boolean;

console.log(b1);//true
console.log(b2);//false

function test(){
   return b3=false;
// if we give return above then below code will not work/not executed
    console.log(b3); //false
    
}

// we are getting o/p of below code as undefined because of the scope limit and we haven't given any return value
console.log(test());//undefined

// Any---Datatype

// it's a special data type that can hold any data

// the compiler will not perform datatype-checking on variable who's type is any.

// var x : any;
// void is absence of any value


let firstName: any='Dnyanesh'

firstName=101;

// or
firstName=true;
console.log(`anytype first name,`,firstName);


// if no datatype is defined then it will automatically consider as "any data type"
let iamnotsure = "code mind";
console.log(`any type iam not sure,`,iamnotsure);



// whenever we don't know in which format data is coming from the server and we want to hold the data then we will define variable datatype as any
// function getDataFromServer(){
//         let result: any;
//     // API to get value(we dont know the type)

// }

var objProduct: any={
    productID:1,
    productName:"Iphone",
    productPrice:1000000

}

console.log(objProduct);


