// Question 51: Refactoring to Arrow Functions: Take a simple function
// that calculates the area of a rectangle and refactor it into an arrow function.
// Basic Function Syntax
function calculateArea(width, height) {
    return "Area of a Rectangle is: ".concat(width * height);
}
// Refactored into an arrow function
var calculateArea2 = function (width, height) {
    return "Area of a Rectangle is: ".concat(width * height);
};
console.log(calculateArea(10, 15));
console.log(calculateArea2(10, 15));
