// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var obj = {
    Tname: "Sir Bilal",
    expYear: 4,
    isDeveloper: true,
    greeting: function () {
        console.log("My teacher name is ".concat(this.Tname, " and sir experience is ").concat(this.expYear, " "));
    }
};
console.log(obj);
console.log(obj.greeting());
