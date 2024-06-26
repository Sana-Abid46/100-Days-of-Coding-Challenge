// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.
var str = "Programming";
var vowels = "aeiou";
for (var i = 1; i < str.length; i++) {
    var character = str[i];
    if (vowels.includes(character)) {
        console.log("first vowel found : ".concat(character));
        break;
    }
}
