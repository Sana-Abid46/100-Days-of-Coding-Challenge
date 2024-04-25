// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var places = [" Palestine ", " Madina ", " Iran ", " Qatar ", " Egypt "];
// Original order
console.log("\nOriginal Order:\n" + places);
// Alphabetical order
var sort = places.slice().sort();
console.log("\nAlphabetical order:\n" + sort);
// Original order
console.log("\nOriginal Order:\n" + places);
// Reverse Alphabetical order
var reverse = places.slice().sort().reverse();
console.log("\n Reverse Alphabetical order: \n" + reverse);
// Original Order
console.log("\nOriginal Order:\n" + places);
// Reverse Order
var reverse2 = places.reverse();
console.log("\n Reverse Order:\n" + reverse2);
// Reverse Again / Original Order
var reverseAgain = places.reverse();
console.log("\n Reverse Again / Original order:\n" + reverseAgain);
// Again Sort
var sort2 = places.sort();
console.log("\nAgain Sort:\n" + sort2);
// Sort and Reverse
var reverse3 = sort2.reverse();
console.log("\n Sort and Reverse: \n" + reverse3);
