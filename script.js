console.log("Welcome To My Rock Paper Scissors Game")

let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function getUserChoice() {
    return prompt("Enter your choice: rock, paper or scissors");
}

function playRound() {
    const userChoice = getUserChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    if (userChoice == computerChoice) {
        console.log("Round end in a draw");
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("You Lost in this round.")
        computerScore++;
    }
    else if (userChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lost in this round.")
        computerScore++;
    }
    else if (userChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lost in this round.")
        computerScore++;
    }
    else {
        console.log("You Won in this round!")
        userScore++;
    }
    console.log(`Your Score : ${userScore} and Computer Score : ${computerScore}`)
}

function playGame() {
    userScore=0;
    computerScore=0;
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (userScore > computerScore) console.log("You Won the game!");
    else if (userScore < computerScore) console.log("You Lost the game");
    else console.log("Game ends in a Draw");
}