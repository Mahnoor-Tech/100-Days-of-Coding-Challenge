// Question 56: Keep Only Strings: Given a mix of different
// types of items, make a new list that has only the words.
var mixedData = ["Mahnoor", true, "Developer", 1, "Typescript"];
console.log(mixedData);
var extractStrings = mixedData.filter(function (item) { return typeof item === "string"; });
console.log("Extract Only Strings: [".concat(extractStrings, "]"));
