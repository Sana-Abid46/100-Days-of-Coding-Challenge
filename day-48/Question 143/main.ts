// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

let prom = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("This promise was Resolved!")
    }, 3000);
});

prom.then(() => {
    console.log("Wow This promise was Resolved!");
    
}).catch(() => {
    console.log("Catch error REJECTED!");
    
});

// rejected

let prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Rejected")
    }, 3000);
});

prom2.then(() => {
    console.log("Wow This promise was Resolved!");
    
}).catch(() => {
    console.log("Catch error REJECTED!");
    
});