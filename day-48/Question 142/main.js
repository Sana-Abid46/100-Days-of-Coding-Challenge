// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds
console.log("Waiting....");
var sana = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("hello world");
    }, 3000);
});
sana.then(function (message) {
    console.log(message);
});
