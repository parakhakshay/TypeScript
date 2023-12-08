// object destructuring which assigns properties of an object
// to a individual variables
var student = {
    fname: 'jack',
    score: 90
};
var fname = student.fname, score = student.score;
console.log(fname);
console.log(score);
// Array De- structring 
var course = ['Angular', 'ReactJs', 'Vue Js'];
course.push(10);
for (var index = 0; index < course.length; index++) {
    var element = course[index];
    console.log(element);
}
var z = course[0], b = course[1], c = course[2], d = course[3];
console.log('array destructuring', z, b, c, d);
