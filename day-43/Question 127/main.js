// Question 127: Convert a traditional function expression to an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.
function traditional(a, b) {
    var value = a * b;
    return value;
}
var arrowfunc = function (a, b) {
    return a / b;
};
console.log(traditional(10, 20));
console.log(arrowfunc(5, 9));
