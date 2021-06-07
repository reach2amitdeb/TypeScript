var studentName = ["John", "Boh", "Doug"];
var studentScore = {};
studentScore["John"] = 100;
studentScore["Bob"] = 90;
for (var item in studentScore) {
    console.log(item);
    console.log(studentScore[item]);
}
