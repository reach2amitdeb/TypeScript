var maths = prompt("Enter the marks for Maths");
var physics = prompt("Enter the marks for Physics");
var chemistry = prompt("Enter the marks for Chemistry");

function gradeCalculator(m:number, p:number, c:number){
    var avg = (m+p+c)/3;

    if(avg>=90){
        console.log("A grade");
    }else if(avg>=70 && avg<90){
        console.log("B grade");
    }else{
        console.log("C grade");
    }
}

gradeCalculator(parseInt(maths),parseInt(physics),parseInt(chemistry));