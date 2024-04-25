/* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.*/

function hobbies(...hobby: string[]) {
    console.log(`${hobby}\t\n enjoy that hobby\t\n`);
}
hobbies("Cycling", "Coding")
hobbies("Cooking", "Reading books")