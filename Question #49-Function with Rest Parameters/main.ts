// Question 49: Function with Rest Parameters: Write a function that takes a rest
// parameter representing multiple hobbies. It should log each hobby with a statement
// saying you enjoy that hobby.

function myHobbies(...hobbies: string[]): void {
  hobbies.forEach((items) => {
    console.log(`I enjoy ${items}`);
  });
}

myHobbies("robotics 🤖", "traveling 🚢", "cooking 🍜");
