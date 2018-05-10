var correctLetters = ["b", "l", "a", "n", "k", "e", "t"]
var correctGuesses = []
var incorrectGuesses = []

var guesses=10
var wins=0
document.onkeyup = function(event) {

    var userGuess = event.key;

    if (!correctGuesses.includes(userGuess) && correctLetters.includes(userGuess)) {
        document.getElementById("right").innerHTML+=userGuess + " ";
        correctGuesses.push(userGuess); 
    }

    else {
        if (!incorrectGuesses.includes(userGuess) && !correctLetters.includes(userGuess)) {
            incorrectGuesses.push(userGuess)
            console.log(incorrectGuesses)
            guesses--;
            document.getElementById("remaining").innerHTML=guesses;
            document.getElementById("wrong").innerHTML+=userGuess + " ";
            if (guesses==0){
                reset() 
            } 
        }

    }
     if (correctGuesses.length==correctLetters.length) {
         wins++;
         reset()
     }


} 

function reset() {
    guesses=10
    correctGuesses = []
    incorrectGuesses = []
    document.getElementById("wrong").innerHTML="";
    document.getElementById("right").innerHTML="";
    document.getElementById("remaining").innerHTML=guesses;
    document.getElementById("wins").innerHTML=wins;
}