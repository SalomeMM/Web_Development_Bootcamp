var buttonColours = ["red", "blue", "green", "yellow"]; // four colours in the game

var gamePattern = []; // empty array to which we will push the new generated colours

var userClickedPattern = []; // will store the userChosenColour every time

var started = false; // keep track of whether the game has started or not, so we only call nextSequence() on the first keydown.

var level = 0; // will show the level and it starts at level 0


$(document).keypress(function () { // detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence()

    if (!started) { // if started is false, which is, because that is how we built it to begin

        $("#level-title").text("Level " + level); // will change h1 to "Level 0" when the game starts
        nextSequence(); // calls the function that generates a random colour
        started = true; // change started status from false to true
    }
});


$(".btn").click(function () { // will detect when any of the buttons are clicked and trigger a handler function

    var userChosenColour = $(this).attr("id"); // userChosenColour will store the id of the button that got clicked (this)

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour); // will add .pressed class to the chosen colour

    checkAnswer(userClickedPattern.length - 1); // call after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

    console.log("userClickedPatter: " + userClickedPattern.length);

});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { // check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

        console.log("success");
        //     var soundRight = new Audio("sounds/" + userChosenColour + ".mp3");
        // soundRight.play();

        if (userClickedPattern.length === gamePattern.length) { // if the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.

            setTimeout(function () { // call nextSequence() after a 1000 millisecond delay.
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over"); // gives the body the class "game-over"
        setTimeout(function () {
            $("body").removeClass("game-over"); // will removed the given class after 200 miliseconds = 0.2 seconds
        }, 200);

        // $("h1").text("Game Over, Press Any Key to Restart");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();

    }

}

function nextSequence() { // will generate the next colour

    userClickedPattern = []; // once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

    level++; // inside nextSequence(), increase the level by 1 every time nextSequence() is called.

    $("#level-title").text("Level " + level); // inside nextSequence(), update the h1 with this change in the value of level.

    var randomNumber = Math.floor(Math.random() * 4); // create a random number 0-3

    var randomChosenColour = buttonColours[randomNumber]; // select a colour from the array according to the random number

    gamePattern.push(randomChosenColour); // push selected colour into the empty array

    console.log("randomChosenColour: " + randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // add animation for the selected colour

    playSound(randomChosenColour);

}

function playSound(name) { // creates a sound for a specific colour. We will call it when a random colour is selected and when a user clicks on a chosen button.
    var audio = new Audio("sounds/" + name + ".mp3"); // play a sound for the clicked colour
    audio.play();
}


function animatePress(currentColour) { // will animate the pressed colour
    $("#" + currentColour).addClass("pressed"); // gives the pressed colour a new class: ".pressed"
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed"); // will removed the given class after 100 miliseconds = 0.1 seconds
    }, 100);
}

function startOver() { // reset the values of level, gamePattern and started variables. Will be called at the "wrong" if statement.

    level = 0;
    gamePattern = [];
    started = false;
}