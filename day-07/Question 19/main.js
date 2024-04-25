// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// console.log("\tI can invite only two people for dinner.\t");
var guests = ["Mahira Khan", "Mehwish Hayat", "Sana Javed"];
guests.unshift("Kinza Hashmi");
guests.splice(2, 0, "Sajal Ali");
guests.push("Saboor Ali");
var num = guests.splice(2, 4);
num.forEach(function (notInvited) {
    console.log("\n".concat(notInvited, " I'm sorry you are not invited for dinner\n"));
});
guests.forEach(function (invited) {
    console.log("\nDear ".concat(invited, " you are still invited.\t\n Thank You\n"));
});
// guests.splice(0,2);
console.log("\nTotal guests:\n" + guests.length);

