// Rock Paper Scissors GAME

// Función computerPlay que será el segundo player 
// en el juego

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

function computerPlay() {
    computerMove = randomInteger(0,2)
    if (computerMove === 0) {
        return "rock";
    } else if (computerMove === 1) {
        return "paper";
    } else if (computerMove === 2) {
        return "scissors";
    }
};

finishedGame = false;

function playRound(player, computer) {
    if (player === "rock") {
        if (computer === "scissors") {
            finishedGame = true;
            return "You Win! Rock beats Scissors";
        } else if (computer === "paper") {
            finishedGame = true;
            return "You Lose! Paper beats Rock";
        } else {
            return "Both of you chose Rock, it's a draw. GO AGANE!!!";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            finishedGame = true;
            return "You Win! Paper beats Rock";
        } else if (computer === "scissors") {
            finishedGame = true;
            return "You Lose! Scissors beats Paper";
        } else {
            return "Both of you chose Paper, it's a draw. GO AGANE!!!";
        }
    } else if (player === "scissors") {
        if (computer === "paper") {
            finishedGame = true;
            return "You Win! Scissors beats Paper";
        } else if (computer === "rock") {
            finishedGame = true;
            return "You Lose! Rock beats Scissors";
        } else {
            return "Both of you chose Scissors, it's a draw. GO AGANE!!!";
        }
    } else {
        return "Wrong input, need to choose Rock, Paper or Scissors."
    }
}


function game() {
    while (finishedGame === false) {
        computerSelection = computerPlay();
        // console.log(computerSelection);
        playerSelection = prompt("Your're going to play Rock, Paper, Scissors against the computer. Make your choice down below!!!").toLocaleLowerCase();
        alert(playRound(playerSelection, computerSelection));
    }
}

game();
// console.log(finishedGame);
// console.log(playerSelection);
// console.log(computerSelection);

// console.log(playRound(playerSelection, computerSelection));


