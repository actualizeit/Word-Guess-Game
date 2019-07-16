// variables for potential letters and the words that may be selected to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["tipsy", "bashed", "befuddled", "buzzed", "crocked", "crocked", "flushed", "flying", "glazed", "inebriated", "laced", "lit", "muddled", "plastered", "potted", "sloshed", "stewed", "tanked", "totaled", "wasted", "juiced"];

// Creates a function to randomize an array

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Randomizes the words to guess
shuffle(words);

// Creating a variable to hold the number of wins. Starts at 0.
var wins = 0;

// Per game variables of guesses remaining and letters already guessed
var guesses = 12;
var lettersGuessed = [];

// Creates a counter variable to progress through the words and creates a varaiable to hold the current word.
var counter = 0
var currentWord = words[counter];

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

// Creates a function to return the positions of an element in array

function count(array,element){
  var counts = [];
    for (i = 0; i < array.length; i++){
      if (array[i] === element) {  
        counts.push(i);
      }
    }
  return counts;
}

// Variables that hold references to the places in the HTML where we want to display things.

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var youWonText = document.getElementById("you-won-text");


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  console.log("Current Word Array: " + currentWordArray);

  // Determines which key was pressed.
    var userGuess = event.key;

  // Only run the following code block if the user presses a key in the letters array.
  if (letters.includes(userGuess)){

    // console.log("Counter: " + counter);
    // console.log("Shuffled Words Array: " + words);

    // Check that the word has not been guessed before proceeding.
    if(getOccurrence(blanks, "_") == 1 && currentWordArray.indexOf(userGuess) == blanks.indexOf("_"))
    { if(counter < words.length - 1){

    // Incriment wins and resets the game if the word has been guessed
      wins++;
      counter++;
      guesses = 12;
      lettersGuessed = [];
      currentWord = words[counter];
      currentWordArray = Array.from(currentWord);
      blanks = new Array(currentWordArray.length).fill("_");

      // If there are no more words, places the users guess into the blanks array and triggers a message
    }else{
      i = currentWordArray.indexOf(userGuess);
      blanks[i] = userGuess.toUpperCase();
      youWonText.textContent = "You Won! That's pretty much amazing. I'm all out of words. THERES NO MORE WORDS! OH THE HUMANITY!";
    }
  }else{
  
    // console.log("Letters Guessed userGuess index: " + lettersGuessed.indexOf(userGuess.toUpperCase()));
    // console.log("blanks userGuess index: " + blanks.indexOf(userGuess));
    // console.log(count(currentWordArray, userGuess))
    // // console.log(currentWordArray);
    // // console.log(words.indexOf(currentWord));

    // Places the users guess into the blanks array if it is correct and has not been guessed
    if(currentWordArray.includes(userGuess) && blanks.indexOf(userGuess) < 0) {
        i = count(currentWordArray, userGuess);

        blanks[i[0]] = userGuess.toUpperCase();
        blanks[i[1]] = userGuess.toUpperCase();
        blanks[i[2]] = userGuess.toUpperCase();
        blanks[i[3]] = userGuess.toUpperCase();
    }


  // Take away a guess if the letter is not in the currentWordArray and add the letter to letters guessed
        if(lettersGuessed.indexOf(userGuess.toUpperCase()) < 0 && (blanks.indexOf(userGuess.toUpperCase()) < 0)){
        guesses--;
        lettersGuessed.push(userGuess.toUpperCase());

        
   // Resets the game if the guess count reaches zero     
        if(guesses <= 0){
          counter++;
          guesses = 12;
          lettersGuessed = [];
          currentWord = words[counter];
          currentWordArray = Array.from(currentWord);
          blanks = new Array(currentWordArray.length).fill("_");
        }

        }
      }
        // Hide the directions
    directionsText.textContent = "";

    // Display the text associated with each element in the game
    winsText.textContent = "Wins: " + wins;
    currentWordText.textContent = "Current Word: " + blanks.join(" ");
    guessesRemainingText.textContent = "Guesses Remaining: " + guesses;
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed.join(", ");


  };
};
