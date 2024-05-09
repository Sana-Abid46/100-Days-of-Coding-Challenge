// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
 
function personAge(age: number) {
    if (age <= 13)
        return "The person is Child"
    else if (age > 13 && age < 19)
        return "The person is teenager"
    else if (age >= 20) {
        return "The person is adult"
    };
};

console.log(personAge(25)); // adult
console.log(personAge(15)); // teenager
console.log(personAge(5));  // child

