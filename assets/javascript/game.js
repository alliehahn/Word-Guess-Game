var words=["Stark", "Tyrion", "Bran", "Raven", "DireWolf", "Throne", "Dragon", "Tywin", "Catelyn", "North", "Theon", "Iron"]
var currentWord;
var guesses=10
var wins=0
var correctGuesses = []
var incorrectGuesses = []
var previousWords =[]

init()

console.log(currentWord);

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
        if(currentWord.includes(userGuess)) {
            if (!correctGuesses.includes(userGuess)){
                correctGuesses.push(userGuess);
            }

            if(currentWord.length==correctGuesses.length) {
                previousWords.push(currentWord);
                wins++;
                reset()
            }
        }
        else {
            if(!incorrectGuesses.includes(userGuess)) {
                incorrectGuesses.push(userGuess);
                guesses--;
                document.getElementById("remaining").innerHTML=guesses;
                document.getElementById("wrong").innerHTML+=userGuess + " ";
                
            }
    

            if (guesses==0){
                reset()
            }
            console.log(correctGuesses)

        }



        document.getElementById("spaces").innerHTML= ""

        for(var i = 0; i < currentWord.length; i++) {
            if(correctGuesses.includes(currentWord[i])) {
                document.getElementById("spaces").innerHTML += currentWord[i] + " "
            } else {
                document.getElementById("spaces").innerHTML += "_ ";
            }
        }


} 

function reset() {
    init()
    guesses=10
    correctGuesses = []
    incorrectGuesses = []
    document.getElementById("wrong").innerHTML="";
    document.getElementById("remaining").innerHTML=guesses;
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("previous").innerHTML="Previous Words" + ":" + " " +previousWords;
}
function init() {
    //selects random word from array 
    currentWord=words[Math.floor(Math.random() * words.length)].toLowerCase();
    for (var i = 0; i < currentWord.length; i++) {
        document.getElementById ("spaces").innerHTML+= "_ " 
    }
}


