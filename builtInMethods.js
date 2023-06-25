// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"


"Hello World".toLowerCase();
//The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

"Hello World".includes("Hello");
//The includes() method is called on the string "Hello World"
//No arguments are passed; includes() has one job which is to include the word 'Hello' and that exsists already in the string.
// The return value is "Hello World"

"Hello World".endsWith("Hello");
//This method is incorrect because the string does not end with 'Hello'.

"Hello World".endsWith("rld");
//The endsWith() method is called on the string "Hello World"
//No arguments are passed; endsWith() has one job which is to end with 'rld' and that already exsists in the string.
//The return value is "Hello World"


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "John";
var lastName = "Doe"

function fullName(firstName, lastName) {
    console.log(firstName.startsWith("J"));
    console.log(lastName.endsWith("E"));
}
fullName(firstName + lastName);

//The startsWith() method is called on the firstName variable, which is stored in the string "John"
//The startsWith() method will return true because "John" starts with "J"
//The endsWith() method will return true because "Doe" ends with the letter "E"
//Both of the console.log() statements prints the return value of true to the console.


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var puppies = ("cocker spaniel", "lab", "chihuahua", "dalmatian") 
function{
    console.log(puppies.toUpperCase)
}
puppies()