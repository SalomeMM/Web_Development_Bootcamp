// If the $ script is included in the head of the html document, it is possible that the js script is activated before the head is done loading.
// In this case we need to check whether the $ library is ready:

$(document).ready(function () {
    $("h1").css("color", "red");
});

// To avoid this, better include all scripts right before the closing body tag.

// jQuery example:
$("h1").css("color", "red"); // equals document.querySelector("h1").css("color", "red")


/// --- Selecting Elements with jQuery

// $("h1"); // document.querySelector
// $("button"); // document.querySelectorAll, no difference


/// --- Manipulating Styles with jQuery

// css method: with 1 property, you are checking its value; with 2, you are setting a value.
$("h1").css("color", "red"); // setting color as red
console.log($("h1").css("font-size")); // checking which size h1 has

// changing style in js is bad practice, but we can add a "big-title" class in css and apply it from here:
$("h1").addClass("big-title");
// we can also remove a class:
$("h1").removeClass("big-title");
//add or remove multiple classes
$("h1").addClass("big-title margin-50"); // same set of quotation marks, but with a space in between.

console.log($("h1").hasClass("big-title margin-50")); // asking whether an element has a certain class


/// --- Manipulating Text with jQuery
//2 ways, first one:
$("h1").text("Bye");
$("button").html("<em>Hey</em>"); // this equals innerHTML, we not only update the text but everything inside the html tags


/// --- Manipulating Attributes with jQuery
// attributes are for example: image src, anchor tag href...
console.log($("img").attr("src")); // 1 parameter, CHECK image source (we don't currently have an image so it won't be found)
$("a").attr("href", "https://yahoo.com"); // 2 parameters, SET a new href


/// --- Adding Event Listeners with jQuery
$("h1").click(function () {
    $("h1").css("color", "purple");
});

// in vanilla js, to add event listeners to all buttons we had to create a for loop.

for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}

// with jQuery we can do the same with only this code:

$("button").click(function () { // we don't need a for loop because by selecting for button jQuery selects all the buttons and with click it will add the event listener on click to all of them.
    $("h1").css("color", "purple");
});

// we can also do it with keydown:
$("input").keydown(function (event) {
    console.log(event.key);
});

// if we wanted to do the same as for the drum kit, adding the event listener to the whole document, we can do this:

// $("document").keydown(function(event) { // changing the target to "body" or the whole "document".
//     console.log(event.key);
// })


// --- Challenge: add event listener so when I press a key it will be shown as the h1:

$(document).keydown(function (event) { // changing the target to "body" (with quotes) or the whole "document" (without quotes).
    $("h1").text(event.key);
});


// Even more flexible way to add an event listener: use the method "on":

$("h1").on("mouseover", function () { // example mouseover, but valid for any event: https://developer.mozilla.org/en-US/docs/Web/Events
    $("h1").css("color", "purple");
});


/// --- Adding and Removing Elements with jQuery

//before and after methods add elements before a specific selector

$("h1").before("<button>New Before Button</button>"); // before the opening tag
$("h1").after("<button>New After Button</button>"); // after the closing tag
$("h1").prepend("<button>New Prepend Button</button>"); // adds new HTML element to the selected item just after the opening tag
$("h1").append("<button>New Append Button</button>"); // adds new HTML element to the selected item just before the closing tag

// Remove element, for example all our buttons:
// $("buttons").remove();


/// --- Website Animations with jQuery

// $("h1").on("click", function () {
//     $("h1").hide();
// })
// $("h1").appear(); // we make it appear
// $("h1").toggle("10"); // for progressive hide, not so sudden
// $("h1").fadeOut(); // reduces opacity and then hides
// $("h1").fadeIn(); // appear and fade into full opacity
// $("h1").slideUp(); // collapses the selected element from botton to top, useful for a dropdown menu
// $("h1").slideDown(); // will uncollapse that element

// If we want more control over our animations, instead of the pre-built ones we can use .animate, custom css to gradually animate towards:

// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5}) // on click on a button, it reduces the opacity of h1 by half.
// });
// ONLY works with css rules with a numeric value!! (not colors, but for example margins, with a number or a percentage.

// We can also concatenate animations:
// $("button").on("click", function(){
//     $("h1").slideUp().slideDown().animate({opacity: 0.5})
// });