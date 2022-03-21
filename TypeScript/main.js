"use strict";
exports.__esModule = true;
var message = "welcome back again";
console.log(message);
var isBeginner = true;
var age = 22;
var name = "rushikesh";
var sentence = "my name is ".concat(name, " and my age is ").concat(age, " \nI am beginner in Typescript");
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3, 4];
var person = ["unknown", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var anyType;
anyType = 22;
anyType = true;
anyType = "max";
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Tony"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("rushikesh");
console.log(emp1.employeeName);
emp1.greet();
