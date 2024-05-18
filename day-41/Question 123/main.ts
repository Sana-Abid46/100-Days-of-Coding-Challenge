// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.


let str = "Programming";

let vowels = "aeiou";

for (let i = 1; i < str.length; i++) {

    let character = str[i]

    if (vowels.includes(character)) {
        console.log(`first vowel found : ${character}`);
        break;
        
    }
}

// Output 
// first vowel found : o