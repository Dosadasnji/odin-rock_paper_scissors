let humanScore = 0;
let computerScore = 0;

// SCORES ^ //

function getComputerChoice () {
    let x = Math.random();
    if ( x <= 0.33){
       return "Rock"
    }
    else if ( x >= 0.33 && x <= 0.66)
        {
        return "Paper"}
    else if ( x >= 0.66)
        {
        return "Scissors"
    }
    };

// console.log(getComputerChoice())

// COMPUTER CHOICE ^ //

function getHumanChoice() {
    let b = prompt("Chose your weapon").toLowerCase();

if (b === "rock"){
    return "Rock";
  } else if (b === "paper"){
    return "Paper";
 } else if (b === "scissors"){
    return "Scissors";
} else {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice(); 
}
}
// console.log(getHumanChoice())   

// HUMAN CHOICE ^ //

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        
        console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
        console.log("------------------------");
    }

    
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Oh no! The computer is the overall winner.");
    } else {
        console.log("It's a tie overall!");
    }
}



    function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    return "You Win! Rock beats Scissors!";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    return "You Win! Scissors beat Paper!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    return "You Win! Paper beats Rock!";
    } else if (humanChoice === computerChoice) {
    return "It's a tie!";
    } else {
    computerScore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}!`;
    }
    }

playGame();

// GAMEPLAY ^ //



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`You chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(humanSelection, computerSelection));

console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);

// SCORE BOARD ^ //