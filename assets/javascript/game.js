// variables for potential letters and the words that may be selected to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["nuts", "darn", "gosh"];

// Creating a variable to hold the number of wins. Starts at 0.
var wins = 0;

// Per game variables of guesses remaining and letters already guessed
var guesses = 12;
var lettersGuessed = [];

// Randomly chooses a word from the words array. This is the word to be guessed.
var currentWord = words[Math.floor(Math.random() * words.length)];

// Creates an array from the word to be guessed and sets it as a variable
var currentWordArray = Array.from(currentWord);

// Creates an array of blanks the length of the word to be guessed
var blanks = new Array(currentWordArray.length).fill("_");


console.log(currentWordArray);

// Variables that hold references to the places in the HTML where we want to display things.

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var letterGuessedText = document.getElementById("letters-guessed-text");


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
    var userGuess = event.key;

  // Only run the following code block if the user presses a key in the letters array.
  if (letters.includes(userGuess)){

    if(currentWordArray.includes(userGuess) && blanks.indexOf(userGuess) < 0) {
        i = currentWordArray.indexOf(userGuess);
        blanks[i] = userGuess;
        console.log("index of blanks = " + blanks.indexOf("_"));

  // Incriment wins and reset the game if all the blanks are filled
      if(blanks.indexOf("_") < 0){
        console.log(blanks);
        wins++;
        blanks = new Array(currentWordArray.length).fill("_");
        currentWord = words[Math.floor(Math.random() * words.length)];
        guesses = 12;
        lettersGuessed = [];
}
    }else{
  // Take away a guess if the letter is not in the currentWordArray and add the letter to letters guessed
        if(lettersGuessed.indexOf(userGuess) < 0 && (blanks.indexOf(userGuess) < 0)){
        guesses--;
        lettersGuessed.push(userGuess);
        console.log(guesses);
        }
    }

    // Hide the directions
    directionsText.textContent = "";

    // Display the .
    winsText.textContent = "Wins: " + wins;
    currentWordText.textContent = blanks; //.join(" ")
    letterGuessedText.textContent = lettersGuessed;
  };
};
