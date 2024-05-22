// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.

type object = {
    Tname: string,
    expYear: number,
    isDeveloper: boolean,
    greeting: function() => string,
}

let obj: object = {
    Tname: "Sir Bilal",
    expYear: 4,
    isDeveloper: true,
    greeting: () => { 
        console.log(`My teacher name is ${this.Tname} and sir experience is ${this.expYear} `);
    }
}
console.log(obj);
console.log(obj.greeting()); //undefined


