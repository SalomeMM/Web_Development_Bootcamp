// document.querySelector("button").addEventListener("click", handleClick); // finds the 1st button in our document and adds a event listener, so it listens for clicks that happen on that button and runs the function "handleClick". The function "handleClick" is shown withouth parentheses because otherwise it would call the function straight away when the event listener is added, not when the button is clicked.

// function handleClick () {
//     alert("I got clicked 1");
// }


// Shorter, more common way to express:

// document.querySelector(".drum").addEventListener("click", function() {
//     alert("I got clicked 2");
// });


// --- Challenge: add event listeners to all buttons, not only the first

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i<numberOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     alert("I got clicked 3");
// });
// }


// Higher Order Functions - functions that can take other functions as inputs

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(10, 2, add));
console.log(calculator(10, 2, multiply));
console.log(calculator(10, 2, substract));
console.log(calculator(10, 2, divide));

// Debugger console in Chrome Developer Tools, example:
// debugger;
// (calculator(10,2,add);

// Constructor function playground:

var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

console.log(houseKeeper1.cleaningRepertoire);

// instead of creating objects 1 by 1, we are going to create a constructor function:

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience; // this function is going to have a "yearsOfExperience" property (1) that is going to be equal to the input up there in "yearsOfExperience"
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

// now that we have our constructor function, we create new objects:
var houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(houseKeeper1);

var houseKeeper2 = new HouseKeeper(14, "Janet", ["lobby", "toilets"]);
console.log(houseKeeper2);


// --- Challenge: add event listeners to all buttons, not only the first

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         // console.log(this.innerHTML);
//         this.style.color = "white"; // here "this" is the identity of the button that triggers the event. we decide to change its style/color.
//     });
// }

// var tom1Drum = new Audio("sounds/tom-1.mp3"); // create a variable that stores this new object by writing "new Audio" and the URL or location of that audio. This will construct an audio HTML element with several properties and methods.
// tom1Drum.play(); // play is one of those methods


// Adding Switch Statements:

// Takes the code down a different track depending on the value of a variable.

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this.innerHTML);

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3"); // create a variable that stores this new object by writing "new Audio" and the URL or location of that audio. This will construct an audio HTML element with several properties and methods.
                tom1.play(); // play is one of those methods  
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            default: console.log(buttonInnerHTML);
        }
    });
}