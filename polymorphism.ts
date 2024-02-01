
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
// same name with different argument/parameters 
// can be achieve with in the same class
// example:

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
    

// function overloading:

// my code 👇

// var names=function add(a:number,b:number) {
//     return a+b;
// }

// console.log(names(10,20));


// var anme =function add(numberArr:number[]) {
//     var sum = numberArr.reduce(function(x,y){
//         return x + y;
//     },0)
//     return sum
// }
// console.log(anme([1,2,3,4,5,5]));
// // above code  is an example of method overloading that is same method name with different parameter
// // reduce method: it will reduce the array to single value


// signature declaration 👇
function doubleMe(x:number);
function doubleMe(x:string[]);
function doubleMe(x:string);

function doubleMe(x:any) {
    console.log(x*2);
    
}
doubleMe(2);
doubleMe("John")
doubleMe(["a"])

console.log("--------------------------------------");


// to get the double valued  o/p 👇
function doubleMe2(x:number);
function doubleMe2(x:string[]);
function doubleMe2(x:string);

function doubleMe2(x:any) {
if (x && typeof x ==="number") {
console.log(x*2);
    
}else if(x && typeof x==="string"){
    console.log(x + " " +x);
    
}else if (Array.isArray(x)){
    return x.map(name=>console.log(x));
    
}
    
}
doubleMe2(2);
doubleMe2("John")
doubleMe2(["a"])


// REST parameter must be last parameter in the Parameter list

// REST Parameter is nothing but spread operator 
// example👇

var product = function (...nums){
    var result =1;
    for(let i=0 ;i< nums.length;i++){
        console.log(nums[i]);
        result*=nums[i]
    }
    return result;
}

console.log(product(2,3,4,5));
