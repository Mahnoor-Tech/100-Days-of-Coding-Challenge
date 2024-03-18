/*
Question 46: Enhanced Laptop Object: Construct an object for a laptop including
properties make, model, year, and a method describe() that logs a sentence about
the laptop.
*/
var laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2022,
    describe: function () {
        return "Make: ".concat(laptop.make, ", Model: ").concat(laptop.model, ", Year: ").concat(laptop.year);
    },
};
console.log(laptop.describe());
