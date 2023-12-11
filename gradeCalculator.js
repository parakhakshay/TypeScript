var data = prompt("Please enter your Math Mark");
var datanum = parseInt(data);
var data1 = prompt("Please enter your Physics Mark");
var datanum1 = parseInt(data1);
var data2 = prompt("Please enter your Chemistry Mark");
var datanum2 = parseInt(data2);
var adddata = datanum + datanum1 + datanum2;
// console.log(typeof adddata, adddata);
var avg = (adddata / 3);
// console.log(avg);
if (avg < 33) {
    alert("\"F grader\" and your avg score is: ".concat(avg));
}
else if ((avg > 33) && (avg < 70)) {
    alert("\"C grader\" and your avg score is: ".concat(avg));
}
else if ((avg > 70) && (avg < 90)) {
    alert("\"B grader\" and your avg score is: ".concat(avg));
}
else if (avg > 90) {
    alert("\"A grader\" and your avg score is: ".concat(avg));
}
