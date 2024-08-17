// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds


console.log("Waiting....");

let sana = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("hello world");
    }, 3000);
});

sana.then((message) => {
    console.log(message);
    
})
