function getComputerChoice () {
    let x = Math.random();
    if ( x <= 0.33){
       return "Computer chose Rock!"
    }
    else if ( x >= 0.33 && x <= 0.66)
        {
        return "Computer chose Paper!"}
    else if ( x >= 0.66)
        {
        return "Computer chose Scissors!"
    }
    };
console.log(getComputerChoice())
// COMPUTER CHOICE ^ //

function getHumanChoice() {
    let b = prompt("Chose your weapon").toLowerCase();

if (b === "rock"){
    return "You chose Rock!";
  } else if (b === "paper"){
    return "You chose Paper!";
 } else if (b === "scissors"){
    return "You chose Scissors";
} else 
    (b != "rock" | "paper" | "scissors") 
     alert("No selected weapon available.")
    return "No selected weapon available."
};
console.log(getHumanChoice())   
// HUMAN CHOICE ^ //
let humanScore = 0;
let computerScore = 0;
// SCORES ^ //
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" > computerChoice === "scissors"){
        return "You win! Rock beats Scissors!"
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
// ROUND EXAMPLE ^ //
