    
      var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var wins = 0;
      var losses = 0;
      var guessLeft = 10;
      var guessedLet =[];
      

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      var letterG = function(){
        document.querySelector("#guessedL").innerHTML = "Guessed Letters: " + guessedLet.join(", ");
      }
 
      document.onkeyup = function(event) {

      console.log(computerGuess);
      var userGuess = event.key;
      guessedLet.push(userGuess);
      letterG();
           if (guessLeft > 0, guessLeft--){
              if (userGuess === computerGuess) {
                    wins++;
                    guessLeft = 10; 
                   computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                   guessedLet = [];
                   
              }
              
            }
             if(guessLeft === 0){
                losses++;
                guessLeft = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                guessedLet= []; 
                
              }
              


          var html = "<p>Press any key to start guessing!</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>";
         

         
          document.querySelector("#game").innerHTML = html;

          document.getElementById("moves").innerHTML = "Guesses Left <strong>" + guessLeft + 
            "</strong> You Picked <strong>" + userGuess + "</strong>.";

      };
         



