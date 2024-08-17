// Question 144: Explain the use of the Promise.all() method with an example.

let promise1 = Promise.resolve(19);
let promise2 = 42;
let promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 2000, "Sana")
});

Promise.all([promise1, promise2, promise3]).then((message) => {
    console.log(message);
    
}).catch((error) => {
    console.log(error);
    
})