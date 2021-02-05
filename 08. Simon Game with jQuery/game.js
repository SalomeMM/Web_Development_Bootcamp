var buttonColours = ["red", "blue", "green", "yellow"]; // four colours in the game

var gamePattern = []; // empty array to which we will push the new generated colours


function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4); // create a random number 0-3
    var randomChosenColour = buttonColours[randomNumber]; // select a colour from the array according to the random number
    gamePattern.push(randomChosenColour); // push selected colour into the empty array
    console.log(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // add animation for the selected colour

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3"); // play a sound for the selected colour
    audio.play();

}

nextSequence();