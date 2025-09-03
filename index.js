//This is the declaration of the variables
let humanScore = 0;
let computerScore = 0;

//This function takes human's choice as argument and give the score of round and who won
function playRound(x){
    // This function return computer's choice of rock, paper or scissor
    function getComputerChoice(){
        let computerChoiceNumber = Math.floor(Math.random() * 3)
        if (computerChoiceNumber === 0) {
           return "Rock"
        }
        else if (computerChoiceNumber === 1) {
            return "Paper"
        }
        else return "Scissors"
    }

    let y = getComputerChoice()

    if (x == y) {
        return "It's a Draw!"
    }
    else if (x == "Paper" && y == "Rock") {
        return "You Lose! Paper beats Rock."
    }
    else if (x == "Scissors" && y == "Paper") {
        return "You Lose! Scissors beats Paper."
    }
    else if (x == "Rock" && y == "Scissors") {
        return "You Lose! Rock beats Scissors."
    }
    else if (x == "Rock" && y == "Paper") {
        return "You Win! Paper beats Rock."
    }
    else if (x == "Paper" && y == "Scissors") {
        return "You Win! Scissors beats Paper."
    }
    else if (x == "Scissors" && y == "Rock") {
        return "You Win! Rock beats Scissors."
    }

}

//The score tracker
function scoreTracker(value){
    if (value.includes("Win")) {
        humanScore = humanScore + 1
    }
    if (value.includes("Lose")){
        computerScore = computerScore + 1
    }
    return `The scores are:- You:${humanScore}, Computer:${computerScore}`;
}

//This selects the buttons to be chosen
const buttons = document.querySelectorAll('.btn');

//Declaring the variable which will keep track of number of round played
let roundPlayed = 0;

//This is the preparation to print the result inside the page
const result = document.querySelector("#results");
const score = document.querySelector("#score");
const turnResult = document.querySelector("#turnResult")

// Registering a click event in buttons and passing that to playRound function and Playing whole game using if statement
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const humanChoice = e.target.id
        const roundResult = playRound(humanChoice)
        console.log(roundResult)
        console.log(scoreTracker(roundResult))

        //Below 2 lines are there to print the score till now and the current round winner
        turnResult.textContent = roundResult;
        score.textContent = `The score till now is :- You:${humanScore}, Computer:${computerScore}`

        //This if else statement will give the final verdict of who is the winner
        if (roundPlayed == 4) {
            if (humanScore > computerScore) {
                result.textContent = `You WIN!  The FINAL score is :- You:${humanScore}, Computer:${computerScore}`
            }
            else if (computerScore > humanScore) {
                result.textContent = `You LOSE!  The FINAL score is :- You:${humanScore}, Computer:${computerScore}`
            }
            else if (computerScore == humanScore) {
                result.textContent = `It's a DRAW!`
            }
            console.log(`Your FINAL scores are :- You:${humanScore}, Computer:${computerScore}`)
        }

        roundPlayed = roundPlayed + 1
    });
});

// result.textContent = humanScore + " and " + computerScore