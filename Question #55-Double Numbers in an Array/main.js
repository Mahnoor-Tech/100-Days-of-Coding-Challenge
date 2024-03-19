// Question 55: Double Numbers in an Array/: Make a list of numbers.
// Then, use a trick to make a new list where each number is twice its original value.
var numbers_array = [2, 4, 6, 8, 10];
console.log("Original Array: [".concat(numbers_array, "]"));
var new_array = numbers_array.map(function (number) { return number * 2; });
console.log("Double Numbers Array: [".concat(new_array, "]"));
