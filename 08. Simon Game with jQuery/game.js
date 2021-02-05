var buttonColours = ["red", "blue", "green", "yellow"]; // four colours in the game

var gamePattern = []; // empty array to which we will push the new generated colours

var userClickedPattern = []; // will store the userChosenColour every time


$(".btn").click(function() { // will detect when any of the buttons are clicked and trigger a handler function

    var userChosenColour = $(this).attr("id"); // userChosenColour will store the id of the button that got clicked (this)
  
    userClickedPattern.push(userChosenColour);

    // var audio = new Audio("sounds/" + userChosenColour + ".mp3"); // play a sound for the clicked colour
    // audio.play();
    playSound(userChosenColour);

    animatePress(userChosenColour); // will add .pressed class to the chosen colour
  
    console.log("userClickedPatter: " + userClickedPattern);
  
  });

function nextSequence() { // will generate the next colour

    var randomNumber = Math.floor(Math.random()*4); // create a random number 0-3

    var randomChosenColour = buttonColours[randomNumber]; // select a colour from the array according to the random number

    gamePattern.push(randomChosenColour); // push selected colour into the empty array

    console.log("randomChosenColour: " + randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // add animation for the selected colour

    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3"); // play a sound for the selected colour
    // audio.play();
    playSound(randomChosenColour);

}

nextSequence();


function playSound(name) { // creates a sound for a specific colour. We will call it when a random colour is selected and when a user clicks on a chosen button.
    var audio = new Audio("sounds/" + name + ".mp3"); // play a sound for the clicked colour
    audio.play();
  };
  

function animatePress(currentColour) { // will animate the pressed colour
    $("#" + currentColour).addClass("pressed"); // gives the pressed colour a new class: ".pressed"
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed"); // will removed the given class after 100 miliseconds = 0.1 seconds
      }, 100);
}