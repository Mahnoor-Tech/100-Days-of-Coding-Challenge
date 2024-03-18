/*
Question 48: 
Combining Arrays with Spread Operator: Suppose you're comparing prices 
of two different sets of laptops. Use the spread operator to combine these 
arrays into a single array sorted in ascending order, then log the result.
*/
let prices_arr1: number[] = [10000, 5000, 7000];
let prices_arr2: number[] = [35000, 28000, 9000];

let combinePrices: number[] = [...prices_arr1, ...prices_arr2].sort(
  (a: number, b: number) => a - b
);

console.log(combinePrices);
