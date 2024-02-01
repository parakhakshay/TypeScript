// Compound Assignment operator 

// var x = 50 ;

// var y = 50*100;

// var z = x + y;


var x = 25; // x = 25 
x +=25;   // 25 + 25 = 50 

console.log(x);





var a : number = 40;

console.log(a == Number ('40')); // 

console.log(a !== 30); // 


// Logical operator 


console.log((10>20) && (20>5)); // 



console.log((100>20) || (20>5));


console.log(!((10>20) || (20>5)))// not operator revers the result of 
                                 // expression





// ternary operator

var num1: number = 20;
 var num2: number = 10;

 console.log((num1>num2)? "Num1 is greater than num2" : "Num2 is greater than Num1");

// above operator is used as alternative to an if else statement


// object destructing

// var student = {
//     name:"jack",
//     score:90
// }


// const {name1,age,city}=person;

// array destructing


let courses: any= ['Angular','Java','ReactJs']

courses.push('.Net');

for (let index = 0; index < courses.length; index++) {
    const element = courses[index];
    console.log(element);
    
    
}


// for loop array forloop object practice and nested one

var[z,b,c,d]=courses;

console.log(z,b,c);


// Default parameter

function Display(id:number, name:string, role:string= "Guest User") {
    // console.log("Function Called");
    console.log("ID",id);
    console.log("Name",name);
    console.log("Role",role);
    
    
    
    
}

Display(101,"Jack")//guest role
console.log("----------------------------------------------------");//just to look good in the console inside the browser
Display(202,"John","Admin")//admin role



// polymorphism: poly:"many or multi" and morphic:shapes. example: 

// class pubg{
//     move(){
//         // left
//     }
//     move(){
//         // right
//     }

//     move(){
//         // up
//     }
//     move(){
//         // down
//     }
// }

// method name is same(move()) but performing different operation (up,down,right,left)
// we can achieve same in programming by compile time polymorphism ---- method overloading---
// errors coming in compiling the code is called compile time
// same name with different argument/parameters example:
    
    // class pubg{
//     move(){
//         // left
//     }
//     move(isacrive:boolean){
//         // right
//     }

//     move(name:number){
//         // up
//     }
//     move(name:string){
//         // down
//     }
// }

// in above code we have passed the argument differently in each move method

// runtime compiler:





