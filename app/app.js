console.log("Start!");

let choices = [
    "rock",
    "paper",
    "scissors"
]

function pickRock() {

    let playerChoice = choices[0];
    document.querySelector('#title').innerHTML = `<h1>You have chosen rock!</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    let computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>The computer has chosen ${computerChoice}! You ${compareChoices(playerChoice, computerChoice)}!</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
    
}

function pickPaper() {

    let playerChoice = choices[1];
    document.querySelector('#title').innerHTML = `<h1>You have chosen paper!</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    let computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>The computer has chosen ${computerChoice}! You ${compareChoices(playerChoice, computerChoice)}!</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function pickScissors() {
    let playerChoice = choices[2];
    document.querySelector('#title').innerHTML = `<h1>You have chosen scissors!</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    let computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>The computer has chosen ${computerChoice}! You ${compareChoices(playerChoice, computerChoice)}!</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function setComputerChoice() {
    //select a random rock/paper/scissor choice
    // let choices = Object.keys(choices)
    let choiceIndex = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[choiceIndex]
    return computerChoice;
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie"
    } else if (playerChoice < computerChoice && playerChoice != 2) {
        return "lose"
    } else {
        return "win"
    }
}

console.log("Finish!");