console.log("Start!");

let choices = [
    "rock",
    "paper",
    "scissors"
]

function pickRock() {
    document.querySelector('#title').innerHTML = `<h1>You have chosen rock!</h1>`
    let playerChoice = choices[0];
    return playerChoice;
   
    //invoke setComputerChoice() and save the return value to a computerChoice variable
    document.querySelector('#result').innerHTML = `<h3>The computer has chosen rock!</h3>`
    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
    compareChoices();
}

function pickPaper() {
    document.querySelector('#title').innerHTML = `<h1>You have chosen paper!</h1>`
}

function pickScissors() {
    document.querySelector('#title').innerHTML = `<h1>You have chosen scissors!</h1>`
}

function setComputerChoice() {
    //select a random rock/paper/scissor choice
    // let choices = Object.keys(choices)
    let choiceIndex = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[choiceIndex]
    return computerChoice;
}

function compareChoices() {
    if (playerChoice == computerChoice){
        console.log("Draw");
    }
}

console.log("Player choice:" +playerChoice);
console.log("Player choice:" +computerChoice);
console.log("Finish!");