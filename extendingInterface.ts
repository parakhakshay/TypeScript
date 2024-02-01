

interface IExterior {
    color:string;
    numOfDoors: number;

}

interface IInterior{
    seats:number;
    auto:boolean;
}

interface ICar extends IExterior,IInterior{
    make: string;
    model:string;
    year:number;
}

var myCar : ICar ={
    make: "TATA",
    model: "ALTROZ",
    year: 2017,
    color: "Gray",
    numOfDoors: 4,
    seats: 5,
    auto: false
}

console.log(myCar);


// Learn Prototype Concept in JavaScript