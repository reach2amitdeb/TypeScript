//Array Interface
interface StudentName{
    [index: number]:string; 
}

var studentName:StudentName = ["John", "Boh", "Doug"];

interface StudentScore{
    [index: string]:number;
}

var studentScore:StudentScore = {};

studentScore["John"] = 100;
studentScore["Bob"] = 90;

for(var item in studentScore){
    console.log(item);
    console.log(studentScore[item]);
}