// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.

function MultiplyingDecimals(num1:number, num2:number) : number {
    return Math.round((num1 * num2) * 100) / 100
}

console.log(MultiplyingDecimals(0.23,0.34));
console.log(MultiplyingDecimals(0.1, 0.2));
