// Takes an event and returns the choice
function playerSelection(event) { // Event is processed here
    if (event.target.id === 'rock-btn') {
        return 'rock';
    }
    if (event.target.id === 'paper-btn') {
        return 'paper';
    }
    if (event.target.id === 'scissors-btn') {
        return 'scissors';
    }
}
// generates the choice of the computer
function getComputerChoice() {
    let possibleChoices;
    possibleChoices = ['rock', 'paper', 'scissors']; // create an array containing possible choices
    let arrayIndex = getRandomInt(0, 2); // create an index to be used on possible choices 
    return possibleChoices[arrayIndex]; // returns the value located in possibleChoices array
}

function getRandomInt(min, max) {
    min = Math.ceil(min); // rounds up min
    max = Math.floor(max); // rounds down max
    return Math.floor(Math.random() * (max - min + 1) + min); // generates a number from min - max (inclusive)
}

function playRound(event) {
    // const resultDiv = document.querySelector('#result');
    let userChoice = playerSelection(event); // Passes event to playerSelection and stores the result here
    let compChoice = getComputerChoice();

    // Tie condition
    if (compChoice === userChoice) {

        // Win conditions
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        playerScore++;
        updateScore();

    } else if (userChoice === 'paper' && compChoice === 'rock') {
        playerScore++;
        updateScore();

    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        playerScore++;
        updateScore();

        // Lose conditions
    } else if (compChoice === 'scissors' && userChoice === 'paper') {
        computerScore++;
        updateScore();

    } else if (compChoice === 'rock' && userChoice === 'scissors') {
        computerScore++;
        updateScore();

    } else if (compChoice === 'paper' && userChoice === 'rock') {
        computerScore++;
        updateScore();

        // No condition
    } else {
    }

    if (computerScore === 5 || playerScore === 5) {
        rockBtn.removeEventListener('click', initiateRound);
        paperBtn.removeEventListener('click', initiateRound);
        scissorsBtn.removeEventListener('click', initiateRound);
        console.log('Done!')

        if (computerScore < playerScore) {
            // resultDiv.textContent = 'You Won! Click the reset button to play again.';
        } else {
            // resultDiv.textContent = 'You lost. Click the reset button to play again';
        }
    }
}

function updateScore() {

}
const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    window.location.reload();
}

let computerScore = 0;
let playerScore = 0;

// Selects each button choice
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

// Adds an event listener that passes the event to playRound()
function initiateRound(e) {
    playRound(e);
}

rockBtn.addEventListener('click', initiateRound);
paperBtn.addEventListener('click', initiateRound);
scissorsBtn.addEventListener('click', initiateRound);
