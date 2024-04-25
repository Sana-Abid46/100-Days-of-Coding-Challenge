// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.

let laptop1 = [45000, 30000];
let laptop2 = [60000, 20000];

let laptops = [...laptop1, ...laptop2].sort((a,b) => a - b)
console.log(laptops)