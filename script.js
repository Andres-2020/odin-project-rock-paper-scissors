// Pseudo-code: Game: "Rock, Paper or Scissors"
// a. Create a function that gets a random choice from the computer and returns "Rock, Paper or Scissors" //
// b. Create a function that gets a random choice from the player, returnes "Rock, Paper or Scissors" and is case-insensitive//
// c. Create a function that uses both values and sets the parameters of the game for a single round//
// d. Create a function that loops the game until the player or the computer gets 5 points//

function getComputerChoice() {  // Gets a random integer from 0 to 2 and then returns them in the form of a string with the value "Rock", "Paper" or "Scissors"//
    const random = Math.floor(Math.random()*3);
    if (random === 0) {
      return "Paper";
    } else if (random === 1) {
      return "Rock";
    } else {
      return "Scissors";
    }
  }

function getPlayerChoice() {  // Gets the player's input and returns and edited string//
    let choice = prompt("Pick One: Rock, Paper Or Scissors. First To Get 5 Points Wins!");
    let trim = choice.trim();
    let lower = trim.toLowerCase();
    let firstLetter = lower.charAt(0);
    let upper = firstLetter.toUpperCase();
    let restString = lower.slice(1);
    let result = upper.concat(restString);
    if (choice == "") {
        console.log("No Choice Made");
    }
    return result;
  }

let playerScore = 0;  // Declared the player score variable//
let computerScore = 0;  // Declared the computer score variable//

function playRound() {  // Establishes the games parameters for the game using the previous functions values//
    let computerSelection = getComputerChoice();  // "getComputerChoice()" is now "computerSelection"//
    let playerSelection = getPlayerChoice();  // "getPlayerChoice()" is now "playerSelection"//
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) { // Establishes all posible results from here//
      console.log("It's a Tie");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      console.log("You Won! Rock Beats Scissors!");
      playerScore++;
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
      console.log("Oops, You Lost, Rock Beats Scissors!");
      computerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      console.log("You Won! Scissors Beats Paper!");
      playerScore++;
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
      console.log("Oops, You Lost, Scissors Beats Paper!");
      computerScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      console.log("You Won! Paper Beats Rock!");
      playerScore++;
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
      console.log("Oops, You Lost, Paper Beats Rock!");
      computerScore++;
    } // To here//
    console.log(`Score: -You: ${playerScore}. -Computer: ${computerScore}.`); // Shows the current score each round//
  }

function game() { // Loops "playRound()" until the player or the computer scores 5 points//
    for (let endScore = false; endScore == false;) {
        playRound();
        if (playerScore == 5) {
            endScore = true;
            console.log('Congratulations! You Won The Game!!!');
        } else if (computerScore == 5) {
            endScore = true;
            console.log('Game Over...');
        }
    }
  }
  
game(); //  Final function. Uses all the other elements until it reaches a result//