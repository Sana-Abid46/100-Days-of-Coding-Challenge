//  Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.

let x = 4 
console.log("intial x = " , x)

let addition = x += 4 ;    // 8 

let substracttion = x -= 5   // 3

let division = x /= 10       // 3.9

let multiplication = x *= 13   //  0.3

console.log(`addition: ${addition}, substraction ${substracttion}, multiplication: ${multiplication}, division: ${division}`);
