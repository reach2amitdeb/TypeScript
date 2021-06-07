//Arrow Function
var hello = ():string => {
    return "Hello";
};

console.log(hello());

//Arrow Function with passing parameter
var hello1 = (name:string):string => {
    return "Hello "+name;
};

console.log(hello1("Amit"));

var product = (num1:number, num2:number):number =>{
    return num1 * num2;
}

console.log("Product is " +product(5,8));

var myarray:Array<any> = [];

for(var i=0; i<10; i++){
    myarray.push(():number =>{
        return i;
    })
}

for(var i=0; i<10; i++){
    console.log(myarray[i]());
}