// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["Sana", "Maria", "Hadia", "Aliza", "Areesha", "admin"];
// userNames.forEach((user) => {
//     if (user === "admin") {
//         console.log(`Hello ${user},  would you like to see a status report?`);
//     }
//     else {
//     console.log(`Hello ${user}, thank you for logging in again.`);
//     }
// });
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames = [];
    console.log("All users have been removed. " + userNames.length);
}
