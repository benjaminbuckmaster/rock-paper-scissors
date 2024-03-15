function getComputerChoice() {
    // Return a random number between 1 and 3
    randomInt = Math.floor(Math.random() * 3) + 1;

    if (randomInt === 1) {
        return "Rock";
    } else if (randomInt === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    console.log("player selection: " + playerSelection)
    console.log("computer selection: " + computerSelection)

    if (computerSelection.toLowerCase() === playerSelection) {
        return "It's a tie!"
    }

    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'Scissors' ? 'You Win! Rock beats Scissors' : 'You Lose! Paper beats Rock';
        case 'paper':
            return computerSelection === 'Rock' ? 'You Win! Paper beats Rock' : 'You Lose! Scissors beats Paper';
        case 'scissors':
            return computerSelection === 'Paper' ? 'You Win! Scissors beats Paper' : 'You Lose! Rock beats Scissors';
        default:
            return 'Invalid selection. Please choose Rock, Paper, or Scissors.';
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`ROUND ${round}`);
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your move").toLowerCase();
        result = playRound(playerSelection, computerSelection);
        console.log(result)

        if (result.includes("You Win!")) {
            playerScore++;
        } else if (result.includes("You Lose!")) {
            computerScore++;
        }
    }

    console.log("Player score: " + playerScore + 
                "\nComputer score: " + computerScore);

}

playGame()