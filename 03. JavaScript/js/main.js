// Each section will be indicated with "---" and the title of the section

// --- Javascript Variables Exercise
//
// Given the existing code below, can you write some code so that their values are switched around?
// var a = "3";
// var b = "8";
// So that the variable a holds the value "8".
// And the variable b holds the value "3".
// When the code is run, it should output:
// a is 8
// b is 3
// Do NOT change any of the existing code.
// You are NOT allowed to type any numbers.
// You should NOT redeclare the variables a and b.
// Hint: Use this code playground to run your code and see if it matches your expectations.
// Hint: The solution is just 3 lines of code.

// function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var c = a;
a = b;
b = c;
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
// }


// --- String concatenation

var message = "Hello";
var name = "Angela";

// Exercise: Create a greeting alert using the variables above

alert(message + " there, " + name);


// --- String lengths and retrieving the number of characters

// Create a prompt where the user can enter a long string such as a paragraph of text from a blog post and you will tell them how many characters they have written and also how many characters they have remaining out of either 140 or 280 characters.

var tweet = prompt("Write here");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters. You have " + (140 - tweetCount) + " characters remaining");


// --- Slicing

var name2 = "Bernard";

//output B
name2.slice(0,1);
console.log(name2.slice(0,1))

//output d
name2.slice(6,7);
console.log(name2.slice(6,7))

//output Ber
name2.slice(0,3);
console.log(name2.slice(0,3))

// Create a prompt that, when I paste a text, cuts it to 140 characters

var tweetToCut = prompt("Write here");
var tweetUnder140 = tweetToCut.slice(0, 140);
alert(tweetUnder140)

// Text example with 141 characters
// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam
// When cut, it should end in "sed"

// Shortened version:

alert(prompt("Write here 2").slice(0,140));


// --- Changing casing (toUpperCase and toLowerCase)

// Create a prompt that asks for a name, then show the name with the first character in upper case and the rest in lower case:

var name3 = prompt("What is your name?");


// Option 1, longest:

// a. Split name3 into firstChar and restChar.

var firstChar = name3.slice(0,1);
var restChar = name3.slice(1,name3.length);

// b. Create new variables for capitalized firstChar and restChar.

var UpperCaseFirstChar = firstChar.toUpperCase();
var lowerCaseRestChar = restChar.toLowerCase();

// c. Join them into a new variable forming the new in the required format. 

var capitalizedName = UpperCaseFirstChar + lowerCaseRestChar

// d. Show it in the alert.

alert("Hello " + capitalizedName + "! (longest version)");


// Option 2 (shortest):

// a. Combine all steps into the alert:

alert("Hello " + (name3.slice(0,1)).toUpperCase() + (name3.slice(1,name3.length)).toLowerCase() + "! (shortest version)");


// Option 3 (better for real life, in case we want to store the capitalized name to use somewhere else)

// a. Combine all steps forming the capitalized name.

var capitalizedName2 = (name3.slice(0,1)).toUpperCase() + (name3.slice(1,name3.length)).toLowerCase();

// b. Show it in the alert.

alert("Hello " + capitalizedName2 + "! (best version)");


// --- Modulo operator = remainder of the division#

// create dog years - human years converter/calculator

var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;

alert("Your dog is " + humanAge + " human years old");


// --- Increment and decrement expressions
// Playground

var inputIncrease = prompt("Type a number to find out the number after");

alert("The number after " + inputIncrease++ + " is " + inputIncrease);

var inputDecrease = prompt("Type a number to find out the number before");

alert("The number before " + inputDecrease-- + " is " + inputDecrease)
