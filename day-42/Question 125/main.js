// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
var obj = {
    name: "Sana",
    age: 17,
    ispass: true,
    getvalue: function () {
        this.name = "Nashra";
    }
};
console.log(obj.getvalue());
