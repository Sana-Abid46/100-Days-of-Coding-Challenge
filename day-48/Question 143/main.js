// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var prom = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This promise was Resolved!");
    }, 3000);
});
prom.then(function () {
    console.log("Wow This promise was Resolved!");
}).catch(function () {
    console.log("Catch error REJECTED!");
});
// rejected
var prom2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("Rejected");
    }, 3000);
});
prom2.then(function () {
    console.log("Wow This promise was Resolved!");
}).catch(function () {
    console.log("Catch error REJECTED!");
});
