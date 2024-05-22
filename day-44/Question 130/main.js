"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = exports.project = void 0;
// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
function project(name) {
    if (name === void 0) { name = "Sana"; }
    console.log("My name is ".concat(name, " Abid"));
}
exports.project = project;
var func = function () {
    console.log(6666666666);
};
exports.func = func;
