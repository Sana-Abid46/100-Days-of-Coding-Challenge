//Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
var laptops = [{
        make: "Dell",
        model: "XPS 13",
        year: "2022",
    },
    {
        make: "HP",
        model: "XPS 4",
        year: "2023",
    }];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
