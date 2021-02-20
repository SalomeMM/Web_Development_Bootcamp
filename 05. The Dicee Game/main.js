// a. Create a random number and set the value of this variable to a random number between 1 and 6

// var randomNumber1 = Math.random(); // gives a number between 0 and 0.9999999999999999 (0.9 to 16 decimal places)
// randomNumber1 = randomNumber1 * 6; // we want to use it for a dice roll. A dice has 6 faces.
// randomNumber1 = Math.floor(randomNumber1) + 1; // math floor will round down, which will show numbers 0-5. By adding 1, we get numbers from 1-6, like a dice.
// In 1 line:

var randomNumber1 = Math.floor(Math.random() *6) +1; // numbers 1-6
// examine Math.ceil()
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
console.log(randomDiceImage);

var randomDiceImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
console.log(randomDiceImageSource);

//now we put this into our html
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource);
// same but separate in 2 lines according to the solution:
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomDiceImageSource);


// Now same for dice #2

var randomNumber2 = Math.floor(Math.random() *6) +1;
var randomDiceImageSource2 = "images/dice" + randomNumber2 +".png"; 
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);


// Create title announcing winner, self-explanatory:

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}