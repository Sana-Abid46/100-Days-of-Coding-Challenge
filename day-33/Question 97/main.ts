// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.

function getDate() : string {

    let now = new Date()
    let day = String(now.getDate()).padStart(2,'0');
    let month = String(now.getMonth() + 1).padStart(2,'0');
    let year = now.getFullYear()
    return `${day}-${month}-${year}`

};

console.log(getDate()); // 04-05-2024

