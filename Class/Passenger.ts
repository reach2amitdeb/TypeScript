class Passenger{
    firstName: string;
    lastName: string;
    frequentFlyerNo: number;

    constructor(firstName:string, lastName:string, frequentFlyerNo:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display(){
        console.log(passenger.firstName+" "+passenger.lastName+" "+passenger.frequentFlyerNo);
    };
}

var passenger = new Passenger("Amit", "Bhattacharya", 12345);
passenger.display();

for(let item in passenger){
    if(passenger[item] instanceof Function){
        continue;
    }else{
        console.log(item);
        console.log(passenger[item]);
    }
}