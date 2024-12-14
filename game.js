function getComputerChoice() {
    let choice = Math.floor(Math.random() * 11);
    
    if (choice <= 3.33) 
        return "Rock";
    else if ( choice >= 3.33 & choice <= 6.66)
        return "Paper";
    else if (choice >= 6.66)
        return "Scissors";
    }
    
    // Simple AI choice ^ //
    
    function getHumanChoice() {
    let userInput = prompt("Chose Your Weapon!?").toLowerCase(); 
    
    if (userInput === "rock"){
        return "Rock";
    }
    else if (userInput === "paper"){
        return "Paper";
    }
    else if (userInput === "scissors"){
        return "Scissors";
    }
    else {
        alert("No Selected Weapon Available, Try Again");
      }
    }
    
    // Human choice ^ //
    
    let humanScore = 0;
    let computerScore = 0; 
    
    // Score ^ //
    
    function playRound(humanChoice, computerChoice) {
            if (humanChoice === "Rock" && computerChoice === "Scissors"){
            return humanScore++,
            `You win! ${humanChoice} beats ${computerChoice}!`;
            }
            else if (humanChoice === "Paper" && computerChoice === "Rock"){
            return humanScore++,
            `You win! ${humanChoice} beats ${computerChoice}!`;
            }
            else if (humanChoice === "Scissors" && computerChoice === "Paper"){
            return humanScore++,
            `You win! ${humanChoice} beats ${computerChoice}!`;
            }
            else if (humanChoice === computerChoice) {
            return "It's a tie!";
            }
            else {
            return computerScore++,
            `You lose! ${computerChoice} beats ${humanChoice}!`;
            }
        }
    
    
    // 1 Round ^ //
    
    function playGame() {
        for (let i = 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
    
            console.log(playRound(humanSelection, computerSelection));
            console.log("You: " + humanScore, "Computer: " + computerScore);
            console.log("------------------------------");
        }
    
        if (i = 5 && humanScore > computerScore){
        return "YOU ARE THE OVERALL WINNER!";
        } else if (i = 5 && humanScore < computerScore){
        return "COMPUTER IS THE OVERALL WINNER!";
        } else { i = 5 && humanScore === computerScore 
        return "IT'S A TIE OVERALL!";
        }
    }
    console.log(playGame());
    
    // Game/Rounds ^ //