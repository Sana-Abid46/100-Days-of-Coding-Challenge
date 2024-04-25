// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function Cars(model, manufacturer, color, aditionalInfo) {
    var carInfo = { model: model, manufacturer: manufacturer };
    if (color) {
        carInfo.color = color;
    }
    if (aditionalInfo) {
        carInfo.aditionalInfo = aditionalInfo;
    }
    return carInfo;
}
console.log(Cars("Model: Corolla", "Manufacturer: Toyota", "Color: Silver"));
console.log(Cars("Model: X5", "Manufacturer: BMW", "Color: Black", "Additional Info: Leather Seats"));
console.log(Cars("Model: Civic", "Manufacturer: Honda"));
