console.log(`Welcome!
Rules: 
Please select one between 'Rock', 'Paper' and 'Scissor' and type in the alert box given.
You can not enter anything other then the three choices mentioned.
Good Luck`);
// ---------------------------------------------------------------
//The real coding start here

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

//This selects the buttons to be chosen
const buttons = document.querySelectorAll('.btn');

// Registering a click event in buttons and passing that to playRound function
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const humanChoice = e.target.innerHTML
        console.log(playRound(humanChoice))
    });
});

