// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Sana Abid";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.toLowerCase().split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' '));
