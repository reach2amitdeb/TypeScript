function hello(name) {
    return "Hello" + name;
}
console.log(hello("Amit"));
//Multiple Parameter
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is: " + add(10, 20));
//Optional Parameter
function display(id, name, role) {
    console.log("id: " + id);
    console.log("name: " + name);
    if (role != undefined) {
        console.log("role: " + role);
    }
}
display(1, "Amit");
//Default Value
function display1(id, name, role) {
    if (role === void 0) { role = "Normal User"; }
    console.log("id: " + id);
    console.log("name: " + name);
    console.log("role: " + role);
}
display1(1, "Amit");
//Function as Parameter
function calculator(fun) {
    console.log(fun(10, 20));
}
calculator(add);
//Returning a Function within an Function
function calculator1() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
var sub = calculator1();
console.log(sub(20, 5));
console.log(calculator1()(20, 5));
//Anonymous Function
var hello1 = function (name) {
    return "Hello" + name;
};
console.log(hello1("Rahul"));
