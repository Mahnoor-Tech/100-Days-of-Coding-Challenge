// Question 55: Double Numbers in an Array/: Make a list of numbers.
// Then, use a trick to make a new list where each number is twice its original value.

const numbers_array: number[] = [2, 4, 6, 8, 10];
console.log(`Original Array: [${numbers_array}]`);
let new_array: number[] = numbers_array.map((number) => number * 2);
console.log(`Double Numbers Array: [${new_array}]`);
