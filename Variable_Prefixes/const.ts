//const once declared can't be changed 
const pi = 3.14;

pi = 4.5;

const product = function(x: number, y: number): number{
    return x*y;
}

product = function(x: number, y: number):number{
    return x+y;
}

console.log(product);