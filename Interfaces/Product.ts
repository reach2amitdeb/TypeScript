interface Product {
    id:number;
    name:string;
    description:string;
    price:number;
}

var product1:Product = {
    id: 123,
    name: "I Phone",
    description: "12 Pro",
    price: 1200,
}

//Optional Property
interface Products {
    id:number;
    name:string;
    description:string;
    price?:number;
}

var products1:Products = {
    id: 123,
    name: "I Phone",
    description: "12 Pro",
}

//Adding methods yo Object Interfaces
interface Prod {
    id:number;
    name:string;
    description:string;
    price:number;
    display():void;
}

var prod1:Prod = {
    id: 123,
    name: "I Phone",
    description: "12 Pro",
    price: 1200,
    display():void{
        console.log(this.id+" "+this.name);
    }
}