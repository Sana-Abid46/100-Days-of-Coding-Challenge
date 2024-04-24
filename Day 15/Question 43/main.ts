//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,///// return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Original list of magicians
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to modify the array of magicians
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Function to show the modified list of magicians
function show_magicians(magicians: string[]): void {
    console.log(magicians);
}

// Modify the array of magicians
let great_magicians = make_great(magicians);

// Show the modified list of magicians
show_magicians(great_magicians);
show_magicians(magicians);

