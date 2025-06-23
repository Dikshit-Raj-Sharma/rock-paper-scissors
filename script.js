console.log("Welcome To My Rock Paper Scissor Game")

let userScore=0;
let computerScore=0;
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}
console.log(getComputerChoice())

function getUserChoice(){
    return prompt("Enter your choice: rock, paper or scissor");
}
console.log(getUserChoice())