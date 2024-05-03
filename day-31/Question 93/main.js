// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.
function arrayIndex(arr) {
    var value = arr.indexOf("banana");
    if (value !== -1)
        arr[value] = "Mango";
}
var fruits = ['apple', 'banana', 'orange', 'cherry', 'watermelon'];
arrayIndex(fruits);
console.log(fruits);
