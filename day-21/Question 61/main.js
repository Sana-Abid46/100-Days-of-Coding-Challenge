// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["Cars"] = 0] = "Cars";
    vehicles[vehicles["bike"] = 1] = "bike";
    vehicles[vehicles["airoplane"] = 2] = "airoplane";
    vehicles[vehicles["trucks"] = 3] = "trucks";
    vehicles[vehicles["jeep"] = 4] = "jeep";
    vehicles[vehicles["boat"] = 5] = "boat";
})(vehicles || (vehicles = {}));
;
console.log(vehicles.Cars);
