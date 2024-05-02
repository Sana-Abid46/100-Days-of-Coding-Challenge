//  Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
var x = 4;
console.log("intial x = ", x);
var addition = x += 4; // 8 
var substracttion = x -= 5; // 3
var division = x /= 10; // 3.9
var multiplication = x *= 13; //  0.3
console.log("addition: ".concat(addition, ", substraction ").concat(substracttion, ", multiplication: ").concat(multiplication, ", division: ").concat(division));
