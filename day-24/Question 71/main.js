// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
var names = "sana";
names = "ayesha";
console.log(names);
var id = 426;
// id = 789;                   // showing error bcz its constant
console.log(id);
var freind = "dania";
// let freind = "hania"        // ERROR
console.log(freind);
