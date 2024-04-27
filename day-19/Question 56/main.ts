// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

let items  = ['burger', 1, 'pizza', 'cake', 10, 'icecream', false]

let newList = items.filter((item) => typeof item === "string")

console.log(newList);
 
