console.log("Start!");

let choices = [
    "ROCK",
    "PAPER",
    "SCISSORS"
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
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN ROCK...</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function pickPaper() {

    playerChoice = choices[1];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN PAPER...</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function pickScissors() {
    playerChoice = choices[2];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN SCISSORS...</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

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
        return "IT'S A DRAW.";
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        return "YOU WIN!";
    } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        return "YOU LOSE...";
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        return "YOU WIN!";
    } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        return "YOU LOSE...";
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        return "YOU WIN!";
    } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        return "YOU LOSE...";
    }
}

console.log("Finish!");