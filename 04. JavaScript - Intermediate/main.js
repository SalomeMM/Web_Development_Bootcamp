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
    alert("Your love score is " + loveScore + "%." + " You love each other like Kanye loves Kanye")
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%.")
    }

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%." + " You get together like oil and water")
    }


// --- Challenge: advanced BMI calculator.
// Write a function that outputs (returns) a different message depending on the BMI.
// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

function bmiCalculator (weight, height) {
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

bmiCalculator (64, 1.75)