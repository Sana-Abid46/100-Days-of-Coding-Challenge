// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
var obj = {
    name: "Sana",
    getName: function () {
        return this.name;
    }
};
var answer = obj.getName();
console.log(answer); // Output Sana
