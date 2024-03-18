/*
Question 47: Advanced Array Destructuring: Given an array of objects representing
different laptops, each with properties make, model, and year, use array destructuring
to assign the first and second laptops to variables. Then, log these variables.

*/
var laptops = [
    {
        make: "Microsoft",
        model: "Surface Laptop 4",
        year: 2022,
    },
    {
        make: "Apple",
        model: "MacBook Pro",
        year: 2022,
    },
    {
        make: "Apple",
        model: "MacBook Pro",
        year: 2022,
    },
];
// destructuring to assign the first and second laptops to variables.
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
