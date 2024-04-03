// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


console.log("\tI can invite only two people for dinner.\t");

let guests: string[] = ["Mahira Khan", "Mehwish Hayat", "Sana Javed"];

guests.unshift("Kinza Hashmi");
 
guests.splice(2,0, "Sajal Ali");

guests.push("Saboor Ali");

let num = guests.splice(2,4)

num.forEach(function (notInvited) {
    console.log(`\n${notInvited} I'm sorry you are not invited for dinner\n`)
 });
guests.forEach(function (invited) {
    console.log(`\nDear ${invited} you are still invited.\t\n Thank You\n` );
    
});
guests.splice(0,2);

console.log(guests);




    

