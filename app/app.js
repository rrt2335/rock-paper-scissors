console.log("Start!");

let choices = [
    "rock",
    "paper",
    "scissors"
]
//rock beats scissors [0] [2]
//paper beats rock [1] [0]
//scissors beats paper [2] [1]

let winCount = 0;
let lossCount = 0;
let computerChoice = ''
let playerChoice = ''

function pickRock() {

    playerChoice = choices[0];
    document.querySelector('#title').innerHTML = `<h1>You have chosen rock!</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>The computer has chosen ${computerChoice}! You ${compareChoices(playerChoice, computerChoice)}!</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function pickPaper() {

    playerChoice = choices[1];
    document.querySelector('#title').innerHTML = `<h1>You have chosen paper!</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>The computer has chosen ${computerChoice}! You ${compareChoices(playerChoice, computerChoice)}!</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function pickScissors() {
    playerChoice = choices[2];
    document.querySelector('#title').innerHTML = `<h1>You have chosen scissors!</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>The computer has chosen ${computerChoice}! You ${compareChoices(playerChoice, computerChoice)}!</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}


function setComputerChoice() {
    // Select a random rock/paper/scissor choice
    // let choices = Object.keys(choices)
    let choiceIndex = Math.floor(Math.random() * choices.length)
    computerChoice = choices[choiceIndex]
    return computerChoice;
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie";
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "win";
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return "lose";
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return "win";
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "lose";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "win";
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "lose";
    }
}

console.log("Finish!");