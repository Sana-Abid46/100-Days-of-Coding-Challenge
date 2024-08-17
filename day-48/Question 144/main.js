// Question 144: Explain the use of the Promise.all() method with an example.
var promise1 = Promise.resolve(19);
var promise2 = 42;
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, "Sana");
});
Promise.all([promise1, promise2, promise3]).then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
});
