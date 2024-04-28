// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more.
function modulus(num1, num2) {
    return num1 % num2;
}
;
console.log(modulus(15, 2)); // Output 1
console.log(modulus(20, 5)); // Output 0
console.log(modulus(5, 9)); // Output 5
