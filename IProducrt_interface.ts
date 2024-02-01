// inheritance:
// reusability of the parent class into the child class
// types of inheritance 5: single, multiple, multilevel and hybrid
// typeScript supports only Single and multilevel inheritance it doesn't support multiple and hybrid inheritance
// super class is your parent class

// class A{

// }
// // single
// class B extends A,


// class A{

// }
// // multiple
// class B extends A,
// class C extends B
// in interface all method are abstract method which is declaration without implementation
// interface: we can achieve multiple inheritance by using interface
// interface is nothing but a contract that you defined which has a set of rules which are nothing but properties
// methods that object should follow .

// in interface all methods are abstract method

// function Display():void: // declaration

// function print(): void{
    //logic // implementation

// }

// var objstud = {
//     firstname: "Jack",
//     dept:"IT"
// }

// var objStudent ={
    //     lastName : "Smith",
    // firstname : "hary",
    // dept:'QA'
// }

// above will not able to work


// var objStud ={
    // lastName : "Smith",
    // firstname : "hary",
    // dept:'QA'
// }

// now it will work above code 👆

// syntax👇

interface IProduct{
    id:number;
    name:string;
    description:string;
    price:number;

}

var objProduct: IProduct ={ 

    id:120,
    name:"Laptop",
    description:"IMAC Laptop",
    price:50000,

}


// optional parameter : In type script we actively define an optional parameter as a parameter that can be made
// optional when calling function.

// we need to add ? symbol at the end of parameter declaration
// example

// function Display2(id:number, name:string, role?:string) {
//     // console.log("Function Called");
//     console.log("ID",id);
//     console.log("Name",name);
//     console.log("Role",role);
//     // 👇below code will help to not to show the role as undefined into the database and it is the good practice
//     if(role!=undefined){
//         console.log("Role",role);
        
//     }

    
// }

// Display2(101,"Jack")//throws an error if we not give parameter as role?:string this is for making role as an optional parameter
// // role will show as undefined as string in the database to avoid this write if condition mentioned as above 👆


//  so in the inheritance we can also defined the optional parameter that is:


interface IProduct2{
    id:number;
    name:string;
    description:string;
    // 👇making price as an optional parameter
    price?:number;
    display():void; //declaration

}

// class ABC implements IProduct2 {

// }
// 👆above code throws the error "Class 'ABC' incorrectly implements interface 'IProduct2'.
//   Type 'ABC' is missing the following properties from type 'IProduct2': id, name, description, displayts(2420)"
// because of the interface properties
// we use implements keyword in class
// and then implement all the required methods from the interface
// inheritance we use extends keyword


// class implementation
class ABC implements IProduct2 {

    id:number;
    name:string;
    description:string;
    // 👇making price as an optional parameter
    price?:number|undefined;
    display():void {
        throw new Error("Method not implemented")
    }; //declaration

}




var objABC=new ABC()
objABC.id=101;
objABC.name="watch"
objABC.display();

var objProduct2: IProduct2 ={
    id: 120,
    name: "Laptop",
    description: "IMAC Laptop",
    display: function (): void{
        console.log(this.id+" "+this.name);
        
    }
}
// above👆 code runs without the defining the price parameter

// interface is only for compile time and its only in the typeScript not in JS

console.log(objProduct2);

// single responsibility(marathi me bataya gya to google me search kro lo bhai)
// if a class has more than one responsibilities it means that class is doing too much
// so divide them into different classes
// example
// suppose you have a student class which contains details like rollno , name etc
// but now you want to add marks of students in your system
// so instead of adding fields related to marks in student class
// create another class Marks with fields related to marks
// this way you can make sure that no clash will happen between two classes
// also it will be easy to maintain the code
// interface IPerson{
//     firstName: string;
//     lastName : string;
//     }
//     class Person implements IPerson{
//         firstName:"";
//         lastName:"";
//         fullName():string{
//             return `${this.firstName} ${this.lastName}`
//             }}



// Implementation
// SOLID


// S--
// open/close principle:close to modification but open to extent
// L- liskow substitution: child class should replace parent without any issue
// I--
// D--


// 
