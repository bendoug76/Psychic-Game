var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
                "p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var yourGuesses = [];

document.onkeydown = function(event) {

    var userGuess = event.key;

    var comGuess = letters (Math.floor(Math.random() * letters.length));

    var userInput = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"];

    if (userInput.indexOf(userGuess) > -1){
        if (userGuess === comGuess){
            wins++;
            guessesLeft = 9;
            yourGuesses = [];
        }

        if (userGuess != comGuess){
            guessesLeft = -1;
            yourGuesses.push(userInput);
        }

        if (guessesLeft === 0){
            loses++;
            guessesLeft = 9;
            yourGuesses = [];
        }
    }

    var onPageInfo =

}




