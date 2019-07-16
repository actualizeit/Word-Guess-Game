// variables for potential letters and the words that may be selected to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["nuts", "darn", "gosh"];

// Creating a variable to hold the number of wins. Starts at 0.
var wins = 0;
let guesses = 12;

// Randomly chooses a word from the words array. This is the word to be guessed.
var currentWord = words[Math.floor(Math.random() * words.length)];

// Creates an array from the word to be guessed and sets it as a variable
var currentWordArray = Array.from(currentWord);

// Creates an array of blanks the length of the word to be guessed
var currentGuesses = new Array(currentWordArray.length).fill("_");


console.log(currentGuesses);
console.log(currentWord);
console.log(currentWordArray);

// Variables that hold references to the places in the HTML where we want to display things.

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var LetterGuessedText = document.getElementById("letters-guessed-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

  // Only run the following code block if the user presses a key in the letters array.
  if (letters.includes(userGuess)){

    if (currentWordArray.includes(userGuess)){
        i = currentWordArray.indexOf(userGuess);
        currentGuesses[i] = userGuess;
        console.log(currentGuesses);

    }else{
  // Take away a guess if the letter is not in the currentWordArray
        guesses = guesses - 1;
        console.log(guesses);

    }
    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    // userChoiceText.textContent = "You chose: " + userGuess;
    // computerChoiceText.textContent = "The computer chose: " + computerGuess;
    // winsText.textContent = "wins: " + wins;
    // lossesText.textContent = "losses: " + losses;
    // tiesText.textContent = "ties: " + ties;
  };
};