var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerNo);
    };
    ;
    return Passenger;
}());
var passenger = new Passenger("Amit", "Bhattacharya", 12345);
passenger.display();
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
