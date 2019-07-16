// variables for potential letters and the words that may be selected to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["nuts", "darn", "gosh", "what", "omfg"];

// Creating a variable to hold the number of wins. Starts at 0.
var wins = 0;

// Per game variables of guesses remaining and letters already guessed
var guesses = 12;
var lettersGuessed = [];

// Randomly chooses a word from the words array. This is the word to be guessed.
var currentWord = words[Math.floor(Math.random() * words.length)];

// An array variable to keep track of the words seen already

var wordsSeen = [currentWord];

// Creates an array from the word to be guessed and sets it as a variable
var currentWordArray = Array.from(currentWord);

// Creates an array of blanks the length of the word to be guessed
var blanks = new Array(currentWordArray.length).fill("_");

// Creates a function to count the occurances of an input in an array
function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}


console.log(currentWordArray);

// Variables that hold references to the places in the HTML where we want to display things.

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var youWonText = document.getElementById("you-won-text");


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
    var userGuess = event.key;

  // Only run the following code block if the user presses a key in the letters array.
  if (letters.includes(userGuess)){

    // Check that the word has not been guessed before proceeding.
    if(getOccurrence(blanks, "_") == 1 && currentWordArray.indexOf(userGuess) == blanks.indexOf("_"))
    { 
    // Incriment wins and resets the game if the word has been guessed
      wins++;
      w = words.indexOf(currentWord);
      blanks = new Array(currentWordArray.length).fill("_");
      guesses = 12;
      lettersGuessed = [];
      if(i < words.length - 1){
        i++;
      }else{
      w = 0;
      }
    currentWord = words[w];

    youWonText = "You Won! That's pretty much amazing. Why don't you try again? Guess another letter to continue!";

    }else{
  

    // console.log("index _ in blanks = " + blanks.indexOf("_"));
    console.log("Letters Guessed userGuess index: " + lettersGuessed.indexOf(userGuess));
    console.log("blanks userGuess index: " + blanks.indexOf(userGuess));
    console.log(currentWordArray);

    if(currentWordArray.includes(userGuess) && blanks.indexOf(userGuess) < 0) {
        i = currentWordArray.indexOf(userGuess);
        blanks[i] = userGuess;
    }


  // Take away a guess if the letter is not in the currentWordArray and add the letter to letters guessed
        if(lettersGuessed.indexOf(userGuess) < 0 && (blanks.indexOf(userGuess) < 0)){
        guesses--;
        lettersGuessed.push(userGuess);
        if(guesses <= 0){
          blanks = new Array(currentWordArray.length).fill("_");
          currentWord = words[Math.floor(Math.random() * words.length)];
          guesses = 12;
          lettersGuessed = [];
        }

        }
      }
        // Hide the directions
    directionsText.textContent = "";

    // Display the .
    winsText.textContent = "Wins: " + wins;
    currentWordText.textContent = "Current Word: " + blanks.join(" ");
    guessesRemainingText.textContent = "Guesses Remaining: " + guesses;
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed.join(", ");


  };
};
