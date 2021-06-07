var product1 = {
    id: 123,
    name: "I Phone",
    description: "12 Pro",
    price: 1200
};
var products1 = {
    id: 123,
    name: "I Phone",
    description: "12 Pro"
};
var prod1 = {
    id: 123,
    name: "I Phone",
    description: "12 Pro",
    price: 1200,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
