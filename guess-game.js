const prompt = require('prompt-sync')({sigint: true});

// Random number from 1 - 10
//attempts, wins, games set to 0
var attempts = 0;
var wins = 0;
var games = 0;
//user name for results
console.log("Welcome to our guessing game. Results are at the end");
var name = prompt('Whats your name : ');

while (attempts <= 5) {
  // Genrate a random number
  const numberToGuess = Math.floor(Math.random() * 10) + 1;
  //Uncomment the line below for testing out workability 
  //console.log(numberToGuess)
  //user guess value
  let guess = prompt('Guess a number from 1 to 10: ');
  games ++;
  // Convert the string input to a number

  guess = Number(guess);
  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!');
    //increase win count
    wins ++;
    //compute losses as player wins
	if (wins >= 1){
		var comp = (games - wins);
	} else {
		var comp = int(games);
	}
    
    //check if user wants to continue
    let cont = prompt('Would you like to continue y/n ?');
    //if yes continue
	if (cont == 'y') {
      attempts = 0
      //If false show results
    } else {
      console.log("Nice entertainig you. Byee !!");
      console.log("Results are \n\t Attempts : ", games, "\n\t", name, ":", wins, "\n\t computer : ",comp);
		break
    }

  } else {
    console.log('Sorry, guess again!');
  }
  //number of attempts for loop control
  attempts ++ ;
  //Stop loop at sixth atempt
  if (attempts == 6) {
    console.log("Last answer was : " + numberToGuess);
    let cont = prompt('Would you like to continue y/n ?');
    //Continue loop
    if (cont == 'y') {
      attempts = 0
      //Stop loop
    } else{
      console.log("Nice entertainig you. Byee !!");
      console.log("Results are \n\t Attempts : ", games, "\n\t", name, ":", wins, "\n\t computer : ", comp);
		break
    }
  }

}
