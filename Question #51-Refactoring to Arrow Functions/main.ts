// Question 51: Refactoring to Arrow Functions: Take a simple function
// that calculates the area of a rectangle and refactor it into an arrow function.

// Basic Function Syntax
function calculateArea(width: number, height: number): any {
  return `Area of a Rectangle is: ${width * height}`;
}

// Refactored into an arrow function
const calculateArea2 = (width: number, height: number): any => {
  return `Area of a Rectangle is: ${width * height}`;
};

console.log(calculateArea(10, 15));
console.log(calculateArea2(10, 15));
