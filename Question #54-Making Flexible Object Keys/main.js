// Question 54: Making Flexible Object Keys: Learn how to set up a list
// where you can change the name of each section based on what you need at
// that moment, like adjusting labels based on user choices.
function createDynamicObject(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createDynamicObject("City", "Toronto");
console.log(userPreference);
