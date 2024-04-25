//  Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
var Smartphone = {
    Brand: "Samsung",
    Model: "Galaxy S21",
    Features: "5G connectivity, AMOLED Display, Triple Camera",
    spec: {
        Storage: "128 GB",
        ScreenSize: "6.2 inches",
        Battery: "4000 mAh",
    }
};
console.log(Smartphone);
console.log(Smartphone.spec.ScreenSize);
