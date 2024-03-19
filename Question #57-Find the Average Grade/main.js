// Question 57: Find the Average Grade: Given a list of
// grades, calculate the average grade.
var grades = [95, 80, 76.5, 62, 59];
console.log(grades);
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log("Average Grade: ", averageGrade);
