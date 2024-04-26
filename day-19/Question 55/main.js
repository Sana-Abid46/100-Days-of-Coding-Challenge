// : Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.
var numbers = [2, 4, 6, 8, 10, 12];
var doubleNumber = [];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    doubleNumber.push(num * 2);
}
console.log(doubleNumber);
