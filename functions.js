// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting () {
    console.log("Hey");
}
greeting();



// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function newGreeting(newName) {
    return `Hi, ${newName}`;
}
console.log(newGreeting("Jaycee"));



// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
var first = "jaycee"
var middle = "anne"
var last = "rodriguez"

function greetPerson(first, middle, last) {
    return `hello ${first + middle +last} how are you doing today?`;
}
console.log(greetPerson("jaycee", "anne", "rodriguez"));




// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
var num = 4
function square(num) {
    return `${num * num}`;
}
square("4" * "4");



// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
var Coffee = 4
var Tortillas = 3
var cheese = 0
var salsa = 1


function checkStock(Coffee, Tortillas, cheese, salsa) {
    if (Coffee >= 4) { 
    console.log("coffee is stocked");
    } else {
        console.log("needs more coffee");
    }
    if (Tortillas < 4) {
        console.log("torillas are running low");
    } else {
        console.log("torillas are stocked");
    }
    if (cheese === 0) {
        console.log("cheese is out of stock");
    } else {
        console.log("we have cheese");
    }
    if (salsa <= 1) {
        console.log("salsa is running low");
    } else {
        console.log("we have salsa")
    }
}
checkStock();

/*
checkStock(4, "Coffee");

// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"