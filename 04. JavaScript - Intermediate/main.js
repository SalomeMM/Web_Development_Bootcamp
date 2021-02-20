//jshint esversion: 6

// Random and pseudo-random number generation

var n = Math.random(); // gives a number between 0 and 0.9999999999999999 (0.9 to 16 decimal places)
n = n * 6; // we want to use it for a dice roll. A dice has 6 faces.
n = Math.floor(n) + 1; // math floor will round down, which will show numbers 0-5. By adding 1, we get numbers from 1-6, like a dice.
console.log(n);


// --- Challenge: love calculator
// Create a love calculator for the user to introduce 2 names and get a random "compatibility percentage".

prompt("What is your name?");
prompt("What is your crush's name?");

var loveScore = Math.random() * 100; // will show whole 2-digit numbers
loveScore = Math.floor(loveScore); // will show 0-99
// alert("Your love score is " + loveScore + "%");

// Add customized message depending on the love score obtained

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%." + " You love each other like Kanye loves Kanye");
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%.");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%." + " You get together like oil and water");
}


// --- Challenge: advanced BMI calculator.
// Write a function that outputs (returns) a different message depending on the BMI.
// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

bmiCalculator(64, 1.75);


// --- Challenge: Leap year calculator challenge
// Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.
// This is how to work out whether if a particular year is a leap year:
// A year is a leap year if it is evenly divisible by 4;
// except if that year is also evenly divisible by 100;
// unless that year is also evenly divisible by 400.

isLeap(2000);

function isLeap(year) {

    /**************Don't change the code above****************/
    var yearResult = "";
    if (year % 4 !== 0) {
        yearResult = "Not leap year."; // if a year is not divisible by 4 then it is not a leap year
    } else if (year % 100 !== 0) {
        yearResult = "Leap year."; // else if a year is not divisible by 100 then it is a leap year
    } else if (year % 400 !== 0) {
        yearResult = "Not leap year."; // else if a year is not divisible by 400 then it is not a leap year
    } else {
        yearResult = "Leap year."; // else it is a leap year
    }

    return yearResult;

}


// --- Arrays

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) { // will retrieve true or false, boolean
    alert("Welcome to my party!");
} else {
    alert("Sorry, maybe next time.");
}


// --- FizzBuzz

var output = [];
output.push(1); // pushes 1 to the end of the array
output.pop; // removes the last item in the array

// Instead of adding numbers manually, let's create a function
var count = 1;

function fizzBuzz() {

    while (count <= 100) { // added a while loop so we don't have to call the function all the time

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;

    }

    console.log(output);
}

// Now let's do the same with a for loop

function fizzBuzz() {

    for (var count = 1; count < 101; count++) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
    }

    console.log(output);
}


// --- Challenge: Who's buying lunch

// Write a function which will select a random name from a list of names. 
// The person selected will have to pay for everybody's food bill.
// Important: The output should e returned from the function and you do not need alert, prompt or console.log.
// The output should match the example output exactly, including capitalisation and punctuation.

// Example input: 
// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); // array length example being 5, randon number, multiplied by nr of people will give 0-4,99999. math floor rounds down to 0-4, 5 array positions.
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}


// --- Challenge: 99 bottles of beer - while loop

// Printing the lyrics to the 99 bottles of beer song

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
    if (numberOfBottles >= 1) {
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
    if (numberOfBottles === 0) { // improved original challenge to show specific lyrics for 0 bottles
        console.log("No more bottles of beer on the wall");
        console.log("No more bottles of beer");
        console.log("We've taken them down and passed them around");
        console.log("now we're drunk and passed out!");
    }
    numberOfBottles--;
}


// // --- Challenge (personal): 99 bottles of beer - for loop instead of while loop



for (var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
    if (numberOfBottles >= 1) {
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
    if (numberOfBottles === 0) { // improved original challenge to show specific lyrics for 0 bottles
        console.log("No more bottles of beer on the wall");
        console.log("No more bottles of beer");
        console.log("We've taken them down and passed them around");
        console.log("now we're drunk and passed out!");
    }
}


// --- Challenge: Fibonacci code


// Create a function where you can call it by writing the code "fibonacciGenerator (n)", where n is the number of items in the sequence.
// So I should be able to call: "fibonacciGenerator(3)" and get [0,1,1] as the output.

// IMPORTANT: The solution checker is expecting an array as the correct output.
// Do NOT change any of the existing code.
// You do NOT need any alerts or prompts, the result should be returned from the function as an output.
// The first two numbers in the sequence must be 0 and 1.
// Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite. e.g. for (var i = 0; i < 10; i ++)

// Logic flow chart: https://drive.google.com/file/d/1g8vVtqhSj44vcElfc-HK0nMbecteW8Yg/view

//Playground: https://repl.it/@appbrewery/Fibonacci-Coding-Exercise



function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

output = fibonacciGenerator(16);
console.log(output);

