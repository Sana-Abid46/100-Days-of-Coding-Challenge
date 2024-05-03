// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

function arrMethod(num: number[]) : number[] {
    return num.filter(num => num > 10)
}

let numbers = [20,34,12,5,8,45,9]
console.log(arrMethod(numbers));  // [ 20, 34, 12, 45 ]
