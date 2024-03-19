// Question 56: Keep Only Strings: Given a mix of different
// types of items, make a new list that has only the words.

const mixedData: any = ["Mahnoor", true, "Developer", 1, "Typescript"];
console.log(mixedData);

const extractStrings: string = mixedData.filter(
  (item: any) => typeof item === "string"
);

console.log(`Extract Only Strings: [${extractStrings}]`);
