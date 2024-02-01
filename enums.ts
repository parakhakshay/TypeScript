// Enum: allow developer to set a constant value like days in week and month in calender and direction
// it is collection of constant value
// Enums or Enumerations are new data types supported in the type script

// example gender 

// syntax:

// enum gender{

// }

enum gender{
    male,
    female
}

console.log(gender);
console.log(gender[0]);
console.log(gender[1]);
console.log(gender.male);
console.log(gender.female);

// to change default index position of the object
enum WeekEnds {
    Saturday=6,
    Sunday=7
}

console.log(WeekEnds.Saturday);//6
console.log(WeekEnds.Sunday);//7

// string based enums
// this will create an object with key as string values and value as number
enum Months{
    Jan='Jan',
    Feb='Feb',
    Mar='Mar'
    }
    console.log(Months.Jan)   ;// 'Jan'
    console.log(Months['Jan']) ;// 'Jan'
    console.log(Months.Feb)   ;//2
    console.log(Months['Feb']);//'Feb'
    




