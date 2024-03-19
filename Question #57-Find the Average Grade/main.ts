// Question 57: Find the Average Grade: Given a list of
// grades, calculate the average grade.

let grades: number[] = [95, 80, 76.5, 62, 59];
console.log(grades);

let averageGrade: number =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log("Average Grade: ", averageGrade);
