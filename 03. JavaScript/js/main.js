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

console.log(message + " there, " + name);


// --- String lengths and retrieving the number of characters

// Create a prompt where the user can enter a long string such as a paragraph of text from a blog post and you will tell them how many characters they have written and also how many characters they have remaining out of either 140 or 280 characters.

var tweet = prompt("Write here and you will see the number of characters you have written and the remaining ones");
var tweetCount = tweet.length;
console.log("You have written " + tweetCount + " characters. You have " + (140 - tweetCount) + " characters remaining");


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

var tweetToCut = prompt("Write here and your text will be cut down to 140 characters");
var tweetUnder140 = tweetToCut.slice(0, 140);
console.log("This is your tweet cut down to 140 characters: " + tweetUnder140)

// Text example with 141 characters
// Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam
// When cut, it should end in "sed"

// Shortened version:

console.log("Tweet cut down to 140 characters, shortest version: " + prompt("Write here and your text will be cut down to 140 characters, shortened version").slice(0,140));


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

console.log("Hello " + capitalizedName + "! (longest version)");


// Option 2 (shortest):

// a. Combine all steps into the alert:

console.log("Hello " + (name3.slice(0,1)).toUpperCase() + (name3.slice(1,name3.length)).toLowerCase() + "! (shortest version)");


// Option 3 (better for real life, in case we want to store the capitalized name to use somewhere else)

// a. Combine all steps forming the capitalized name.

var capitalizedName2 = (name3.slice(0,1)).toUpperCase() + (name3.slice(1,name3.length)).toLowerCase();

// b. Show it in the alert.

console.log("Hello " + capitalizedName2 + "! (best version)");


// --- Modulo operator = remainder of the division#

// create dog years - human years converter/calculator

var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;

console.log("Your dog is " + humanAge + " human years old");


// --- Increment and decrement expressions
// Playground

var inputIncrease = prompt("Type a number to find out the number after");

console.log("The number after " + inputIncrease++ + " is " + inputIncrease);

var inputDecrease = prompt("Type a number to find out the number before");

console.log("The number before " + inputDecrease-- + " is " + inputDecrease)

// --- Functions
// Practice with Karel: http://stanford.edu/~cpiech/karel/ide.html
// Lesson 118 - Functions 2: Parameters and Arguments

function getBeer (bottles) {
    var beerTotalCost = bottles * 1.5;
    console.log(beerTotalCost);
}
getBeer(3)

// Challenge:

// Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in this format:
// "You have x days, y weeks, and z months left."
// Where x, y and z are replaced with the actual calculated numbers.
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
// IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var monthsLeft = yearsLeft * 12;
    var weeksLeft = yearsLeft * 52;
    var daysLeft = yearsLeft * 365;
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
    }
lifeInWeeks(12)


// Challenge: create a function to buy milk worth "x" amount of money.

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5); // Round down
    console.log("buy " + numberOfBottles + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 1.5; // Remainder of this division. The output of this function will be the change.
  }

  var change = getMilk(5); // we can store the output of the getMilk function in a variable
  console.log("your change is " + change); // and we can log it, we call the function directly here

// Because of this, we can also build a function inside another function:

function calculateBottles (startingMoney, costPerBottle) {
    var finalNumberOfBottles = Math.floor(startingMoney / costPerBottle);
    return (finalNumberOfBottles);
} // this calculates the number of bottles we can buy with x money

function calculateChange (startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
} // this function calculates the change after buying milk for a price y/bottle with x

function getMilk2(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + calculateBottles (money, costPerBottle) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calculateChange(money, costPerBottle)
  }

  console.log("master, your change is " + getMilk2(10, 3));


// Challenge: BMI Calculator:

// Create a BMI calculator using JavaScript functions. 
// The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
// You can calculate it using the formula below, where weight divided by height squared.
// Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
// The first parameter should be the weight and the second should be the height.
// NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.


//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
// var bmi = bmiCalculator(65, 1.8); 
// bmi should equal 20 when it's rounded to the nearest whole number.


function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
} // we round the bmi after calculating it, in case we want to use the full bmi somewhere else.

var bmi = bmiCalculator(65, 1.8);

console.log (bmi); // logs 20, as requested
