console.log(`Welcome!
Rules: 
Please select one between 'Rock', 'Paper' and 'Scissor' and type in the alert box given.
You can not enter anything other then the three choices mentioned.
Good Luck`)
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

