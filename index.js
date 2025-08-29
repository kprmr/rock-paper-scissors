console.log(`Welcome!
Rules: 
Please select one between 'Rock', 'Paper' and 'Scissor' and type in the alert box given.
You can not enter anything other then the three choices mentioned.
Good Luck`);
// ---------------------------------------------------------------
//The real coding start here
// This function return computer's choice of rock, paper or scissor
function getComputerChoice(){
    let computerChoiceNumber = Math.floor(Math.random() * 3)
    if (computerChoiceNumber === 0) {
        return "Rock".toLowerCase()
    }
    else if (computerChoiceNumber === 1) {
        return "Paper".toLowerCase()
    }
    else return "Scissor".toLowerCase()
}

//This function return the human's choice of rock, paper or scissor
function getHumanChoice(){
    let humanChoicePrompt = prompt("What will you choose :- Rock, Paper or Scissor?")
    let humanChoice = humanChoicePrompt.toLowerCase()
    return humanChoice
}

//This function calls playRound to run 5 times, keeps track of score and declare the winner in end.
function playGame(){
    //Declaration of Score variable which will help in keeping track of scores through the game
    let humanScore = 0;
    let computerScore = 0;

    //This function takes human and computer's choice as argument and give the score of round and who won
    function playRound(x, y){
        if (x == y) {
            return "It's a Draw!"
        }
        else if (x == "paper" && y == "rock") {
            return "You Lose! Paper beats Rock."
        }
        else if (x == "scissor" && y == "paper") {
            return "You Lose! Scissor beats Paper."
        }
        else if (x == "rock" && y == "scissor") {
            return "You Lose! Rock beats Scissor."
        }
        else if (x == "rock" && y == "paper") {
            return "You Win! Paper beats Rock."
        }
        else if (x == "paper" && y == "scissor") {
            return "You Win! Scissor beats Paper."
        }
        else if (x == "scissor" && y == "rock") {
            return "You Win! Rock beats Scissor."
        }
    }

    //This loop will invoke playRound function and the score keeping/incrementing five times
    for(let i = 0; i<5; i++){

        //This lines give the values of getHumanChoice and getComputerChoice function and assign them to constants
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        //The assigned constants are passed as an argument of playRound function and the return value is stored in result constant
        const result = playRound(computerSelection, humanSelection);

        //Increment the score if someone wins
        if (result.includes("Win")) {
            humanScore = humanScore + 1
        }
        if (result.includes("Lose")){
            computerScore = computerScore + 1
        }

        console.log(result)
        console.log(`The scores are:- You:${humanScore}, Computer:${computerScore}`);
        // console.log(computerScore);
        // console.log(humanScore);
    }
    if (humanScore > computerScore) {
        console.log(`
            You are the final WINNER!
            Final Score:- You:${humanScore}, Computer:${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`
            Computer is the final WINNER and You are LOSER!
            Final Score:- You:${humanScore}, Computer:${computerScore}`);
    }
    else {
        console.log("BAH! It was a draw.");
    }
}

playGame();