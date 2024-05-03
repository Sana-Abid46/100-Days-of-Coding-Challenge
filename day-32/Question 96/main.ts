// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

function calculateNum(num: number[]) : number {
    return num.reduce((num1 , num2) => num1 + num2 , 0)
}
console.log(calculateNum([4,5,6,7,7,8,9])); // 46
