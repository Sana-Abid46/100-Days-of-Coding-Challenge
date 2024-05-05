// Question 101: Generate a random integer between 1 and 10.

// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.

// Generates a random integer between 1 and 10
function getRandomInt(): number {
    return Math.floor(Math.random() * 8) + 1;
}

// Random Output 
console.log(getRandomInt()); // 4
console.log(getRandomInt()); // 5
