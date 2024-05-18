// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.

type myObject = {

    name: string,
    getName: () => string,

}

let obj: myObject = {

    name: "Sana",
    getName: function() {
        return this.name
    }

}

let answer = obj.getName()

console.log(answer); // Output Sana
