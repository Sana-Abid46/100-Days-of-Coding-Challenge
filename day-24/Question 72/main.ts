// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.

{
    let myName = "Sana Abid"
    let age = 18;
    const item = "burger,pizza"
    const values = 600;

    console.log(`Name: ${myName} Age: ${age}`);
    
}

// console.log(age); // not accessible showing error

let myName = "ayesha"
console.log(myName);
