
var words=[
["R","O","S","E"],
  ["T","U","L","I","P"],
  ["P","E","O","N","Y"],
  ["I","R","I","S"],
  ["Z","I","N","N","I","A"],
  ["D","A","H","L","I","A"]
]
var random = Math.floor((Math.random()*(words.length))); 
var winTimes = 0
var looseTimes = 0
var answer = words[random]; // the word to guess will be chosen from the array above
var currentPhrase = new Array(answer.length);
var error = 0;

var newGameBtn = document.getElementById("newGameBtn");

newGameBtn.addEventListener("touchstart", function() {
    refreshTheGame();
})

console.log(answer, currentPhrase);

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < currentPhrase.length; i++){
    currentPhrase[i] = "_ ";
}

function refreshTheGame() {
    random = Math.floor((Math.random()*(words.length))); 
    answer = words[random]; // the word to guess will be chosen from the array above
    currentPhrase = new Array(answer.length);
    error = 0;
    for (var i = 0; i < currentPhrase.length; i++){
        currentPhrase[i] = "_ ";
    }
    printCurrentPhrase();
    var generateLetter = document.getElementById("generateLetter");
    generateLetter.innerHTML = "Wrong Letters: "
    console.log(answer, currentPhrase);
}

// prints the guessfield
function printCurrentPhrase(){
    var gameForm = document.getElementById("gameForm");
    gameForm.innerHTML = "";
    for (var i = 0; i < currentPhrase.length; i++){
    var letter = document.createTextNode(currentPhrase[i]);
    gameForm.appendChild(letter);
    }
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var testMark = function(){
    var f = document.rateForm; 
    var b = f.elements["rateCharacter"]; 
    var character = b.value; // the letter provided by the user
    character = character.toUpperCase();
    for (var i = 0; i < answer.length; i++){
        if(answer[i] === character){
            currentPhrase[i] = character + " ";
            var score = true;
        }
    b.value = "";
    }
    
    //deletes the guessfield and replaces it with the new one
    // var gameForm = document.getElementById("gameForm");
    // gameForm.innerHTML=""; 
    printCurrentPhrase();
    
    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if(!score){
        var generateLetter = document.getElementById("generateLetter");
        var letter = document.createTextNode(" " + character);
        generateLetter.appendChild(letter); 
        error++;
        var hangman = document.getElementById("hangman");
    }
    
    //checks if all letters have been found
    var finished = true;
    for (var i = 0; i < currentPhrase.length; i++){
        if(currentPhrase[i] === "_ "){
            finished = false;
        }
    }
    if(finished){
        window.alert("The Flower Has Bloomed! Great Guessing!");
        winTimes++;
        document.getElementById("score").innerHTML = winTimes;
        console.log(winTimes);
    }
    
    //once you got six wrong letters, you lose
    if(error === 6){
        window.alert("Oh No! I guess the flower didn't grow! Try Again!");
        looseTimes++;
        document.getElementById("losses").innerHTML = looseTimes;
        console.log(looseTimes);
    }
}
function mySubmitFunction(evt) {
  evt.preventDefault();}

function init(){
    printCurrentPhrase();
}

window.onload = init;
