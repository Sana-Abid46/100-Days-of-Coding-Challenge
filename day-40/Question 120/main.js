// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
var arr = ["Sana", "Maria", "Hadia", "Hadiqa", "Esha", "Nashra"];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var frnds = arr_1[_i];
    console.log("Hello ".concat(frnds));
}
