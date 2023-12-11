

var data: any = prompt("Please enter your Math Mark");
// above used "any" to enter values of any data type("o/p data type when used "any" will be string)
var datanum: number = parseInt(data);
// converting values inside variable "data" which is "string type" into "number" using "parseInt()"
var data1: any = prompt("Please enter your Physics Mark");
var datanum1: number = parseInt(data1);
var data2: any = prompt("Please enter your Chemistry Mark");
var datanum2: number = parseInt(data2);
var adddata = datanum + datanum1 + datanum2;
// adding all the three marks and storing the result in "adddata"
// console.log(typeof adddata, adddata);
var avg=(adddata/3)
// calculating average by dividing the sum of three marks by 3
// console.log(avg);

if(avg<33){
    alert(`"F grader" and your avg score is: ${avg}`)
// calculating avg score which is less then 33
}else if ((avg>33)&&(avg<70)) {
    alert(`"C grader" and your avg score is: ${avg}`)
// calculating avg score which is b/w 33 and 70
}else if((avg>70)&&(avg<90)){
    alert(`"B grader" and your avg score is: ${avg}`)
    // calculating avg score which is above 70 but less than 90
}else if(avg>90){
    alert(`"A grader" and your avg score is: ${avg}`)
      // calculating avg score which is above 90
}


