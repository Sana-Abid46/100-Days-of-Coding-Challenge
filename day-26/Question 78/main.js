// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.
function declarations(num) {
    return num * num;
}
;
console.log(declarations(7)); // 49
var expressions = function (num) {
    return num * num;
};
console.log(expressions(6)); // 36
