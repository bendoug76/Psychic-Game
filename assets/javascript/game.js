
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
                "p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = [];

document.onkeydown = function(event) {

    var userGuess = event.key;

    var comGuess = letters [Math.floor(Math.random() * letters.length)];

    var userInput = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"];

    if (userInput.indexOf(userGuess) > -1){
        if (userGuess === comGuess){
            wins++;
            guessesLeft = 9;
            yourGuesses = [];
        }

        if (userGuess != comGuess){
            guessesLeft --;
            yourGuesses.push(userInput);
        }

        if (guessesLeft === 0){
            losses++;
            guessesLeft = 9;
            yourGuesses = [];
        }
    }

    var html =
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter im thinking of</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + yourGuesses.join(",") + "</p>" 
        
    document.querySelector("#game").innerHTML = html;



console.log(userGuess);
console.log(comGuess);
console.log(wins);
console.log(losses);
console.log(guessesLeft);




}