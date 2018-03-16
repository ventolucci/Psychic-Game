    var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    
    var guessesSoFar = [];
    
    var userGuess = null;
    
    var letterToBeGuessed = Letters[Math.floor(Math.random() * Letters.length)];
    
    
    
    document.onkeyup = function(event) {
    
        
        var userGuess = String.fromCharCode(event.which).toLowerCase();
    
       
        if (guessesSoFar.indexOf(userGuess) < 0 && Letters.indexOf(userGuess) >= 0) {
            guessesSoFar[guessesSoFar.length]=userGuess;
            guessesLeft--;
        }
    
       
        if (letterToBeGuessed === userGuess) {
            wins++;
            guessesLeft = 9;
            guessesSoFar = [];
            letterToBeGuessed = Letters[Math.floor(Math.random() * Letters.length)];
        }
    
        
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessesSoFar = [];
            letterToBeGuessed = Letters[Math.floor(Math.random() * Letters.length)];
        }

        if (losses === 5) {
            alert("game over");
         
        }


        if (wins === 3) {
            alert("you win!!");
            
        }
    
       
        var html = "<p><h1>The Psychic Game</h1></p>" + 
        "<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
        "<p><h4>Wins: " + wins + "</h4></p>" + 
        "<p><h4>Losses: " + losses + "</h4></p>" + 
        "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
        "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
       
        document.querySelector("#game").innerHTML = html;
    
    }