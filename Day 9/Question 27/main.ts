// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// version 1
let alienColor_1 : string = "green";

if (alienColor_1 === "green") {
    console.log("player earned 5 points");
}
else if (alienColor_1 === "yellow"){
    console.log("player earned 10 points.");
}
else if (alienColor_1 === "red"){
    console.log("player earned 15 points.");
}

// version 2

let alienColor_2 : string = "yellow";

if (alienColor_2 === "green") {
    console.log("player earned 5 points");
}
else if (alienColor_2 === "yellow"){
    console.log("player earned 10 points.");
}
else if (alienColor_2 === "red"){
    console.log("player earned 15 points.");
}

// version 3

let alienColor_3 : string = "red";

if (alienColor_3 === "green") {
    console.log("player earned 5 points");
}
else if (alienColor_3 === "yellow"){
    console.log("player earned 10 points.");
}
else if (alienColor_3 === "red"){
    console.log("player earned 15 points.");
}