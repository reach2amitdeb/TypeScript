//const once declared can't be changed 
var pi = 3.14;
pi = 4.5;
var product = function (x, y) {
    return x * y;
};
product = function (x, y) {
    return x + y;
};
console.log(product);
