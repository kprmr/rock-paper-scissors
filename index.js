console.log(`Welcome!
Rules: 
Please select one between 'Rock', 'Paper' and 'Scissor' and type in the alert box given.
You can not enter anything other then the three choices mentioned.
Good Luck`)
// ---------------------------------------------------------------
//The real coding start here
// To get computer choice 
/*
1. the function getComputerChoice randomly returns rock, paper or scissor
for that 
we can use math.random function this function returns value between 0 and 1
2. so we can split 0 to 1 to 3 parts 0 to 0.33, 0.33 to 0.66 and 0.66 to 0.99
    which will give rock, paper and scissor respectively
*/
/*
step one randomly select number between 1 to 100
step 2 make it so that 0 to 33 is rock, 33 to 66 is paper and 66 to 99 is scissor
step 3 display the random string
*/
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


console.log(getComputerChoice())