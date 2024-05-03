// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
function method() {
    var arr = ['Typescript', 'Javascript', 'python', 'Java', 'C++'];
    var lenth = arr.map(function (word) { return word.length; });
    console.log(lenth);
}
method(); // [ 10, 10, 6, 4, 3 ]
