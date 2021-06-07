//Number
var n1:number = 10;
console.log(n1);

//String
var s1:string = "You are the creator of your own destiny";
var s2:string = `All the power is within you`;
console.log(s1);
console.log(s2);

//boolean
var b1:boolean = true;
var b2:boolean = false;
console.log(b1);
console.log(b2);

//any
var a1:any = {
    productId: 1,
    productName: "Iphone",
    productPrice: 1000
};

console.log(a1);

//Homogeneous Array
var array1:Array<string> = ["AngularJS", "ReactJS", "NodeJS"];
console.log(array1);
console.log(array1[0]);

//Heterogeneous Array
var array2:Array<any> = [123, "AngularJS", true];
console.log(array2);
console.log(array2[0]);