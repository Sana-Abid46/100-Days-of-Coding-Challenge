// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var obj = {
    name: "Sana",
    age: 17,
    outerfunc: function () {
        var _this = this;
        console.log("hello ".concat(this.name));
        var innerfunc = function () {
            console.log("Hello ".concat(_this.name, " your age is ").concat(_this.age));
        };
        innerfunc();
    },
};
obj.outerfunc();
