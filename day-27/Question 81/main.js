// Question 81: Iterating Over Object Properties
function objectProperty(obj) {
    for (var property in obj)
        console.log("".concat(property, ": ").concat(obj[property]));
}
;
objectProperty({ make: "toyota", model: "Corolla", year: 2022, color: "Blue" });
