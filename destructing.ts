// object destructuring which assigns properties of an object
// to a individual variables

var student = {     // Object
	fname: 'jack',
	score: 90
}
let {fname,score} = student; 
console.log(fname);
console.log(score);

// Array De- structring 

var course : any = ['Angular', 'ReactJs', 'Vue Js'];

course.push(10);

for (let index = 0; index < course.length; index++) {
    const element = course[index];
    console.log(element);
    
}

var [z,b,c,d] = course;


console.log('array destructuring', z, b, c, d);