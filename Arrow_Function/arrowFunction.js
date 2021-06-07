//Arrow Function
var hello = function () {
    return "Hello";
};
console.log(hello());
//Arrow Function with passing parameter
var hello1 = function (name) {
    return "Hello " + name;
};
console.log(hello1("Amit"));
var product = function (num1, num2) {
    return num1 * num2;
};
console.log("Product is " + product(5, 8));
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () {
        return i;
    });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
