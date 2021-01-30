// 1. Javascript Variables Exercise
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


// 2. String concatenation

var message = "Hello";
var name = "John";

// Exercise: Create a greeting alert using the variables above

alert(message + " there, " + name);


// 3. String lengths and retrieving the number of characters

// Create a prompt where the user can enter a long string such as a paragraph of text from a blog post and you will tell them how many characters they have written and also how many characters they have remaining out of either 140 or 280 characters.

var tweet = prompt("Write here");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters. You have " + (140 - tweetCount) + " characters remaining");


