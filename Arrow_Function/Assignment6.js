var num = prompt("Enter the number");
var n = parseInt(num);
var isPrime = function (n) {
    var prime = n != 1;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
};
var res = isPrime(n);
if (res === true) {
    console.log("Prime number");
}
else {
    console.log("Not a Prime number");
}
