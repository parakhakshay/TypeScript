// Enum: allow developer to set a constant value like days in week and month in calender and direction
// it is collection of constant value
// Enums or Enumerations are new data types supported in the type script
// example gender 
// syntax:
// enum gender{
// }
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
console.log(gender);
console.log(gender[0]);
console.log(gender[1]);
console.log(gender.male);
console.log(gender.female);
// to change default index position of the object
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds.Saturday); //6
console.log(WeekEnds.Sunday); //7
// string based enums
// this will create an object with key as string values and value as number
var Months;
(function (Months) {
    Months["Jan"] = "Jan";
    Months["Feb"] = "Feb";
    Months["Mar"] = "Mar";
})(Months || (Months = {}));
console.log(Months.Jan); // 'Jan'
console.log(Months['Jan']); // 'Jan'
console.log(Months.Feb); //2
console.log(Months['Feb']); //'Feb'
