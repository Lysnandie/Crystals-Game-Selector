$(document).ready(function () {

//sript tag works? Yes!
//alert ("Hello World");

//will need 4 on clicks for the crystals

//random number generator (math.floor) between 19-120
var targetNumber = Math.floor((Math.random() * 102) + 19);

console.log(targetNumber);

//displays number that is needed to be guessed
$("#number-to-guess").text(targetNumber);

//gives me a counter to add up crystal selections as well as wins and losses, can be used to easily reset game

var counter = 0;
var wins = 0;
var losses = 0;

//random value of each crystal that should change every time
//crystal values are 1-12 math.random
var gem1 = Math.floor((Math.random() * 12) + 1);
var gem2 = Math.floor((Math.random() * 12) + 1);
var gem3 = Math.floor((Math.random() * 12) + 1);
var gem4 = Math.floor((Math.random() * 12) + 1);
console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);

//will need to reset the game which will reset the game's total score to 0 and crystals will start over with random number-to-guess after every win or loss

function reset (){
  targetNumber = Math.floor((Math.random() * 102) + 19);
  $("#number-to-guess").text(targetNumber);
  $("#tracker").text("0");
  gem1 = Math.floor((Math.random() * 12) + 1);
  gem2 = Math.floor((Math.random() * 12) + 1);
  gem3 = Math.floor((Math.random() * 12) + 1);
  gem4 = Math.floor((Math.random() * 12) + 1);
  counter = 0;

}

//need to track wins and losses and reset game
// how to get tally marks for the game to track wins and losses...grab element and text?
function win () {
  wins++;
  alert ("You win!");
  $("#aWin").text(wins)
  reset();
}

function loss() {
  losses++;
  alert ("You lost!");
  $("#aLoss").text(losses);
  reset();

}


//need an onclick for each image
//stipulations for wins and losses if statements only 2 options so if or else if counter === targetNumber win, if over loss//number picks > random number generate = loss
//number pick === random number generated = win

$("#gem1").on("click", function() {

counter = counter+ gem1;
console.log(counter);
$("#tracker").text(counter);

if (counter === targetNumber) {
  win();
}

else if (counter >= targetNumber) {
  loss();
}


});

$("#gem2").on("click", function() {

counter = counter+ gem2;
console.log(counter);
$("#tracker").text(counter);

if (counter === targetNumber) {
  win();
}

else if (counter >= targetNumber) {
  loss();
}

});

$("#gem3").on("click", function() {

counter = counter+ gem3;
console.log(counter);
$("#tracker").text(counter);

if (counter === targetNumber) {
  win();
}

else if (counter >= targetNumber) {
  loss();
}

});

$("#gem4").on("click", function() {

counter = counter+ gem1;
console.log(counter);
$("#tracker").text(counter);

if (counter === targetNumber) {
  win();
}

else if (counter >= targetNumber) {
  loss();
}

});





});
