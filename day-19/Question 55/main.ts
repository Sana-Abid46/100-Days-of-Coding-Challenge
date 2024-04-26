// : Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.

let numbers : number[] = [2,4,6,8,10,12];

let doubleNumber : number[] = [];

for(let num of numbers) {
    doubleNumber.push(num * 2)
}
console.log(doubleNumber);
