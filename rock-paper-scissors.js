function getComputerChoice() {
    let randNumber = Math.random();
    choice = "";
    if (randNumber < 0.34) {
        choice = "rock";
    } else if (randNumber >= 0.34 && randNumber < 0.66) {
        choice = "paper";
    } else if (randNumber >= 0.67) {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper, or Scissors");
    if (humanChoice === null) {
        humanChoice = "rock";
    }
    humanChoice = humanChoice.toLowerCase();
    
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Player Loses! Paper beats rock!");
        return "computer";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Player Wins! Rock beats scissors!"); 
        return "player";   
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Player Wins! Paper beats rock!"); 
        return "player"; 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Player Loses! Scissors beats paper!"); 
        return "computer";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Player Loses! Rock beats scissors!"); 
        return "computer";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Player Wins! Scissors beats paper!"); 
        return "player";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    while (round <= 5) {
        let winner = playRound(getHumanChoice(), getComputerChoice());
        if (winner === "player") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
        round++;
    }

    console.log("Final score:\nPlayer: " + humanScore + "\nComputer: " + computerScore);
}

playGame();