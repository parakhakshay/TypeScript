// polymorphism: poly:"many or multi" and morphic:shapes. example: 
function doubleMe(x) {
    console.log(x * 2);
}
doubleMe(2);
doubleMe("John");
doubleMe(["a"]);
console.log("--------------------------------------");
function doubleMe2(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(x); });
    }
}
doubleMe2(2);
doubleMe2("John");
doubleMe2(["a"]);
// REST parameter must be last parameter in the Parameter list
// REST Parameter is nothing but spread operator 
// example👇
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
