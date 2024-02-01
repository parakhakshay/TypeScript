// inheritance:
// reusability of the parent class into the child class
// types of inheritance 5: single, multiple, multilevel and hybrid
// typeScript supports only Single and multilevel inheritance it doesn't support multiple and hybrid inheritance
// super class is your parent class
var objProduct = {
    id: 120,
    name: "Laptop",
    description: "IMAC Laptop",
    price: 50000,
};
// class ABC implements IProduct2 {
// }
// 👆above code throws the error "Class 'ABC' incorrectly implements interface 'IProduct2'.
//   Type 'ABC' is missing the following properties from type 'IProduct2': id, name, description, displayts(2420)"
// because of the interface properties
// we use implements keyword in class
// and then implement all the required methods from the interface
// inheritance we use extends keyword
// class implementation
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.display = function () {
        throw new Error("Method not implemented");
    };
    ; //declaration
    return ABC;
}());
var objABC = new ABC();
objABC.id = 101;
objABC.name = "watch";
objABC.display();
var objProduct2 = {
    id: 120,
    name: "Laptop",
    description: "IMAC Laptop",
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
// above👆 code runs without the defining the price parameter
// interface is only for compile time and its only in the typeScript not in JS
console.log(objProduct2);
