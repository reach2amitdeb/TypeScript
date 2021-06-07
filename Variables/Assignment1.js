//Assignment 1 Solution
//20
var num1 = 20;
console.log(num1);
//3.14
var num2 = 3.14;
console.log(num2);
//Success is the best revenge
var s = "Success is the best revenge";
console.log(s);
//Days of Week
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (Week = {}));
console.log(Week[0]);
console.log(Week[1]);
console.log(Week[2]);
console.log(Week[3]);
console.log(Week[4]);
console.log(Week[5]);
console.log(Week[6]);
