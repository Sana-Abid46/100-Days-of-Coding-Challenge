// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.


function ConvertingStrings(str: string) {

   let uppercase =  str.toUpperCase()
   let lowercase = str.toLowerCase()

  console.log(`upperCase: ${uppercase} lowerCase: ${lowercase}`);
  
};

ConvertingStrings("Sana Abid");
