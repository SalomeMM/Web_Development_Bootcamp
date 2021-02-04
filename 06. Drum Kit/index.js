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

console.log(calculator(10,2,add));
console.log(calculator(10,2,multiply));
console.log(calculator(10,2,substract));
console.log(calculator(10,2,divide));

// Debugger console in Chrome Developer Tools, example:
// debugger;
// (calculator(10,2,add);


// --- Challenge: add event listeners to all buttons, not only the first

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // console.log(this.innerHTML);
        this.style.color = "white"; // here "this" is the identity of the button that triggers the event. we decide to change its style/color.
});
}


// var tom1Drum = new Audio("sounds/tom-1.mp3"); // create a variable that stores this new object by writing "new Audio" and the URL or location of that audio. This will construct an audio HTML element with several properties and methods.
// tom1Drum.play(); // play is one of those methods