// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.

let students = new Map();

students.set(201 , "Sana");
students.set(202 , "Maria");
students.set(203 , "Hania");

students.forEach((value , key) => {
    console.log(`${key} ${value}`);
});