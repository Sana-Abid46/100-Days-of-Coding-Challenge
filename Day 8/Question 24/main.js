// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var colour = "red";
var colour2 = "pink";
console.log(colour == colour2); // false
console.log(colour != colour2); // true
// • Tests using the lower case function
var myName = "SaNa";
myName.toLowerCase();
console.log(myName === "sana"); // false
console.log(myName === "SaNa"); // true
// • Numerical tests
var num1 = 50;
var num2 = 20;
console.log(num1 >= num2); //true
console.log(num1 === num2); //false
console.log(num1 <= num2); //false
// • Tests using "and" and "or" operators
console.log(num1 === num2 && num1 >= num2); //false 
console.log(num1 !== num2 || num1 <= num2); //true 
// • Test whether an item is in a array
var fruits = ["apple", "orange", "watermelon", "strawberry"];
console.log("Is orange in the array?" + fruits.includes("orange")); // true
// • Test whether an item is not in a array 
console.log("Is banana in the array?" + fruits.includes("banana")); // false
