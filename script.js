function getComputerChoice() {
    const random = Math.floor(Math.random()*3);
    if (random === 0) {
      return "Paper";
    } else if (random === 1) {
      return "Rock";
    } else {
      return "Scissors";
    }
  }

function getPlayerChoice() {
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

let playerScore = 0;
let computerScore = 0;

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
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
    }
    console.log(`Score: -You: ${playerScore}. -Computer: ${computerScore}.`);
  }

function game() {
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
  
game();