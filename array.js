// collection of different arrays in the form of different datatypes
var arra1 = [];
var arra2 = new Array();
var arra3 = Array();
var arra4 = [];
var arra5 = new Array();
// array types homogenous (same data type values )
var homoArr = ['Angular', 'JavaScript', "React"];
// we can use for loop to traverse the array
// for of vs for in: 
// for in is iterate in strings of object
// for of iterates over the values array
//  heterogenous (multiple data types values)
// for in returns object (keys)
for (var key in homoArr) {
    console.log(("'by using for in method', ".concat(homoArr[key])));
}
// for of returns values
for (var _i = 0, homoArr_1 = homoArr; _i < homoArr_1.length; _i++) {
    var iterator = homoArr_1[_i];
    console.log(("'by using for of method', ".concat(iterator)));
}
// in most of the cases
// for in object
// for of in array
// compile time error: errors we are getting during the building the app or site is know as compile time error
// runtime error: error we are getting while using on already running website/ app is known as runtime error
// heterogenous array
var hetroArr = ['Kantara', 101, true];
console.log(hetroArr);
