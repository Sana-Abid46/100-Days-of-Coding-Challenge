// Question 146: Show an example of a callback function used to filter an array of numbers.
var numbers = [1, 2, 3, 4, 5, 8, 9, 3, 2, 8, 9, 43, 6, 3];
var filtered = numbers.filter(function (number) { return number > 5; });
console.log(filtered);
