// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Original list of magicians
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to modify the array of magicians
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Function to show the modified list of magicians
function show_magicians(magicians) {
    console.log(magicians);
}
// Modify the array of magicians
var great_magicians = make_great(magicians);
// Show the modified list of magicians
show_magicians(great_magicians);
