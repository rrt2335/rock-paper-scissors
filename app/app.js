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
let drawCount = 0;

let computerChoice = ''
let playerChoice = ''

function pickRock() {
    playSound();
    playerChoice = choices[0];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN ROCK.</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    updateScore();

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function pickPaper() {
    playSound();
    playerChoice = choices[1];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN PAPER.</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    updateScore();

    //invoke a play/compare function and pass your choice 'rock' and the computerChoice
    //eg: play('rock', computerChoice)
}

function pickScissors() {
    playSound();
    playerChoice = choices[2];
    document.querySelector('#title').innerHTML = `<h1>YOU HAVE CHOSEN SCISSORS.</h1>`

    //invoke setComputerChoice() and save the return value to a computerChoice variable
    computerChoice = setComputerChoice();
    document.querySelector('#result').innerHTML = `<h3>THE COMPUTER HAS CHOSEN ${computerChoice}!<br>${compareChoices(playerChoice, computerChoice)}</h3>`

    updateScore();
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
        drawCount++;
        return "IT'S A DRAW.";
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        winCount++;
        return "YOU WIN!";
    } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        lossCount++;
        return "YOU LOSE...";
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        winCount++;
        return "YOU WIN!";
    } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        lossCount++;
        return "YOU LOSE...";
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        winCount++;
        return "YOU WIN!";
    } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        lossCount++;
        return "YOU LOSE...";
    }
}

function updateScore() {
    document.querySelector('#win').innerHTML = `<h5>WINS: ${winCount}</h5>`;
    document.querySelector('#lose').innerHTML = `<h5>LOSSES: ${lossCount}</h5>`
    document.querySelector('#tie').innerHTML = `<h5>DRAWS: ${drawCount}</h5>`
}

function playSound() {
    var audio = document.getElementById("select");
    audio.play();
}

console.log("Finish!");