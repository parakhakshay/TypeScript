//Union Type
// tS support union type. We can combine different data types

// Syntax
// | is pipe operator used to define multiple data types
var sn: string | number | boolean;

sn=101;
sn="codeMind"
sn=true;

// we can declare union in function as well

function Print(arg: number | string){
    console.log(arg);
    
}

Print(10);
Print("Hello");
// Print(true) o/p will be error


// ques : if we pass the number as an argument then it should get added  with 2 
// and if we pass the string value then it should be coacted with other string values

function Print2(arg2: number | string){
    console.log(arg2);
    if (typeof arg2=='number') { //need to use typeof to differentiate between datatypes of the values passing through the argument
        console.log(arg2+2);
        
    } else {
        console.log(arg2 + " " +'test');
        
    }
}

Print2(10);
Print2("Hello");
// Print(true) o/p will be error

// making function to return 

function Print3(arg3: number | string) : number | string //<- declare return type like this
{
    console.log(arg3);
    if (typeof arg3=='number') { //need to use typeof to differentiate between datatypes of the values passing through the argument
        console.log(arg3+2);
        return 1; // make sure to give return type as according to the above arrangement exmp: 1= number here
    } else {
        console.log(arg3 + " " +'test');
        return 2;// make sure to give return type as according to the above arrangement exmp: 1= string here
    }
}

Print3(10);
Print3("Hello");
// Print(true) o/p will be error
