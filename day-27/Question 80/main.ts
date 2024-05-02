// Define types of object , color property is optional
interface property {

    make: string,
    model: string,
    year: number,
    color?: string,

};

// creating object 
let car: property = {

    make: "Toyota",
    model: "Corolla",
    year: 2020,

};

// here's add color property and update year
 car.color = "blue";
car.year = 2022;

// now log the object
console.log(car);


