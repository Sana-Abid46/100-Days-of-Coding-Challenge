// Question 127: Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.



// Traditional Function
function traditional(a: number, b: number): number {
    let value = a * b;
    return value

}


// Arrow Function
let arrowfunc = (a: number,b: number) => {
    return a / b

}

console.log(traditional(10 , 20));
console.log(arrowfunc(5,9));

