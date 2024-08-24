// Question 146: Show an example of a callback function used to filter an array of numbers.

let numbers: number[] = [1,2,3,4,5,8,9,3,2,8,9,43,6,3];

let filtered = numbers.filter((number) => number > 5);

console.log(filtered);
