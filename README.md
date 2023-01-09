# "Rock, Paper Or Scissors" Game

## Step by step

1. Created the **"_getComputerChoice_"** function which gets a random choice from the computer and returns "Rock", "Paper" or "Scissors".
2. Created the **"_getPlayerChoice_"** function which gets a random choice from the player and returns "Rock", "Paper" or "Scissors" **and** is case-insensitive.
3. Created the **"_playerScore_"** and **"_computerScore_"** variables.
4. Created the **"_playRound_"** function which relies on the "_playerScore_" and "_computerScore_" values to play a single round of "Rock, Paper or Scissors" to declare a winner.
5. Created the **"_game_"** function which loops the "_playRound_" function until someone scores 5 points.

###### How do these functions work?

- **"getComputerChoice"** Gets a random integer from 0 to 2 and then returns them in the form of a string with the value "Rock", "Paper" or "Scissors".
- **"getPlayerChoice"** Gets the player's input and returns it in an edited string (also "Rock", "Paper" or "Scissors").
- The **"playerScore"** and **"computerScore"** variables are declared to set the player and the computer score from 0.
- **"playRound"** Sets the game parameters for 1 round using the previous functions values and variables while also establishing all posible results.
- **"game"** Just loops the "playRound" function until the player or the computer scores 5 points.

## Revisited

- Added an UI. gggggggg