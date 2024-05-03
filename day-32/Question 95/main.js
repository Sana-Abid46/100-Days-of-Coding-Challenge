// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
function arrMethod(num) {
    return num.filter(function (num) { return num > 10; });
}
var numbers = [20, 34, 12, 5, 8, 45, 9];
console.log(arrMethod(numbers)); // [ 20, 34, 12, 45 ]
