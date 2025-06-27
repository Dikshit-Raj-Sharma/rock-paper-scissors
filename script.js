
let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function playRound() {
    const computerChoice = getComputerChoice();
    if (userChoice == computerChoice) {
        return "Draw";
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        return "You Lose";
    }
    else if (userChoice == "paper" && computerChoice == "scissors") {
        return "You Lose";
    }
    else if (userChoice == "scissors" && computerChoice == "rock") {
        return "You Lose";
    }
    else {
        return "You Win";
    }
}

let userChoice;
let roundResult = document.querySelector("#roundResult");
let score = document.querySelector("#score");
let winner = document.querySelector("#winner");
let restart = document.querySelector("#restart");

function handleClick(playerChoice) {
    userChoice = playerChoice;
    if (userScore >= 5 || computerScore >= 5) return;

    const result = playRound();

    if (result.includes("You Win")) {
        userScore++;
        roundResult.textContent = "You win this round";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;

    }
    else if (result.includes("You Lose")) {
        computerScore++;
        roundResult.textContent = "You Lost this round";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    }
    else {
        roundResult.textContent = "Round ends in a Draw";
        score.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
    }

    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            winner.textContent = "You Won the game!";
        } else if (computerScore > userScore) {
            winner.textContent = "You Lost the game!";
        } else {
            winner.textContent = "Game ends in a Draw.";
        }
        restart.style.display="inline-block";

        document.querySelectorAll('.choices button').forEach(btn => {
            btn.disabled = true;
        });
    }
}

let btn = document.querySelector(".choices");
    
btn.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const playerChoice = event.target.id;
        handleClick(playerChoice);
    }
})
restart.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    score.textContent = `Player: 0 | Computer: 0`;
    winner.textContent = '';

    document.querySelectorAll('.choices button').forEach(btn => {
        btn.disabled = false;
    });

    restart.style.display = "none";
})
