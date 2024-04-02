// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

console.log("\t\nCongratulations! Now We have a bigger dinner Table\t\n");

let guests: string[] = ["Mahira Khan", "Mehwish Hayat", "Sana Javed"];

guests.unshift("Kinza Hashmi");
 
guests.splice(2,0, "Sajal Ali");

guests.push("Saboor Ali");

guests.forEach(guest =>{
    console.log(`\tDear ${guest}, please join us for dinner.\t`);
    
});
