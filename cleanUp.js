// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?")
}
  askForName()

//console.log needed to be on line 12 not on the same line as the function keyword and function name.

// EX 2:
var sum = ("first", "second", "third");

function addThreeNums(first, second, third) {
  console.log(first + second + third);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// I removed the return sum. I also added console.log underneath the function keyword and moved the var sum out of the function. 
//The variables needed to be a in a string with each variable in a set of quotations.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

//I typed out function.

//  EX 4:
var sum = ("num1", "num2");
var avg = ("sum");

function average(num1, num2) {
  console.log(num1 + num2)
  console.log(sum / 2)
  }
average(2, 6);

  //The variable needed to be outside of the function. var sum = num1 + num2; was incorrect, it needed to bein a console.log not as a variable. 
   //I put var avg = sum /2 in a console.log and removed return avg.