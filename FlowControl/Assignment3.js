var str = prompt("Enter the number");
var num = parseInt(str);
//Using for loop
console.log("Using for loop");
for (var i = 1; i <= num; i++) {
    if (i % 5 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}
//using while loop
console.log("Using while loop");
var i = 1;
while (i <= num) {
    if (i % 5 === 0) {
        i++;
        continue;
    }
    else {
        console.log(i);
        i++;
    }
}
