// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.

type myObject = {
  name: string;
  age: number;
  outerfunc: () => void;
};

let obj: myObject = {
  name: "Sana",
  age: 17,
  outerfunc: function () {
    console.log(`hello ${this.name}`); // 'this' refer to "obj".

// yahan hum arrow function he dein gay warna undefined a jay ga
// its a nested function
    const innerfunc =  () => {
      console.log(`Hello ${this.name} your age is ${this.age}`);
    };

    innerfunc();
  },
};

obj.outerfunc();

// Output
// hello Sana
// Hello Sana your age is 17
