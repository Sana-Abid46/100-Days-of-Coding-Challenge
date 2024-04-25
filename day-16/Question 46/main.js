// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "HP",
    model: "Spectre x360",
    year: "2023",
    describe: function () {
        console.log("Yeh laptop HP Spectre x360 hai jo 2023 mein release hua hai.");
    }
};
console.log(laptop);
laptop.describe();
