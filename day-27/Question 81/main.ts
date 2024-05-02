// Question 81: Iterating Over Object Properties


function objectProperty(obj: object) {
    for (let property in obj)
        console.log(`${property}: ${obj[property]}`);
};

objectProperty({make:"toyota", model: "Corolla", year: 2022, color: "Blue"});