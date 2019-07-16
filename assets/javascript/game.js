// variables for potential letters and the words that may be selected to guess
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var words = ["nuts", "darn", "gosh"];

// Creating a variable to hold the number of wins. Starts at 0.
var wins = 0;


// Variables that hold references to the places in the HTML where we want to display things.

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var LetterGuessedText = document.getElementById("letters-guessed-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

  // Randomly chooses a word from the words array. This is the word to be guessed.
    var currentWord = words[Math.floor(Math.random() * words.length)];

  // Creates an array from the word to be guessed and sets it as a variable
    var currentArray = Array.from()

  // Only run the following code block if the user presses a key in the letters array.
  if (letters.indexOf(userGuess) >= 0){

    // If we choose rock and the computer guesses scissors, increment our wins variable.
    if ((userGuess === "r") && (computerGuess === "s")) {
      wins++;
    }

    // If we choose rock and the computer guesses paper, increment our losses variable.
    if ((userGuess === "r") && (computerGuess === "p")) {
      losses++;
    }

    // If we choose scissors and the computer guesses rock, increment our losses variable.
    if ((userGuess === "s") && (computerGuess === "r")) {
      losses++;
    }

    // If we choose scissors and the computer guesses paper, increment our wins variable.
    if ((userGuess === "s") && (computerGuess === "p")) {
      wins++;
    }

    // If we choose paper and the computer guesses rock, increment our wins variable.
    if ((userGuess === "p") && (computerGuess === "r")) {
      wins++;
    }

    // If we choose paper and the computer guesses scissors, increment our losses variable.
    if ((userGuess === "p") && (computerGuess === "s")) {
      losses++;
    }

    // If we choose the same thing as the computer, increment our ties variable.
    if (userGuess === computerGuess) {
      ties++;
    }
    }
    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    tiesText.textContent = "ties: " + ties;
  }
};