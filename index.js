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
        return "Rock"
    }
    else if (computerChoiceNumber === 1) {
        return "Paper"
    }
    else return "Scissor"
}

//This function return the human's choice of rock, paper or scissor
function getHumanChoice(){
    let humanChoicePrompt = prompt("What will you choose :- Rock, Paper or Scissor?")
    let humanChoice = humanChoicePrompt.toLowerCase()
    return humanChoice
}

//Declaration of Score variable which will help in keeping track of scores through the game
let humanScore = 0;
let computerScore = 0;

/*
1. It take the value of human and computer
2. It compare the value 
3. Determine the winner based on rock, paper and scissor rules
4. Give notification (One of these)
    a. You Lose! Paper beats Rock
    b. You Lose! Scissor beats Paper
    c. You Lose! Rock beats Scissor
    d. You Win! Paper beats Rock
    e. You Win! Scissor beats Paper
    f. You Win! Rock beats Scissor
    g. It's a Draw!
*/
//This function takes human and computer's choice as argument and give the score of round and who won
function playRound(x, y){
    //Black Box
    if (x == y) {
        return "It's a Draw!"
    }
    else if (x == "paper" && y == "rock") {
        return "You lose! Paper beats Rock"
    }
    else if (x == "scissor" && y == "paper") {
        return "You Lose! Scissor beats Paper"
    }
    else if (x == "rock" && y == "scissor") {
        return "You Lose! Rock beats Scissor"
    }
    else if (x == "rock" && y == "paper") {
        return "You Win! Paper beats Rock"
    }
    else if (x == "paper" && y == "scissor") {
        return "You Win! Scissor beats Paper"
    }
    else if (x == "scissor" && y == "rock") {
        return "You Win! Rock beats scissor"
    }
}


