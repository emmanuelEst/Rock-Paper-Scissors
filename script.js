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
// Counts Ties;
let tieCounter = 0;

function playRound(event) {
    let userChoice = playerSelection(event); // Passes event to playerSelection and stores the result here
    let compChoice = getComputerChoice();
    const paperResultDiv = document.querySelector('#results-click-paper');
    const rockResultDiv = document.querySelector('#results-click-rock');
    const scissorsResultDiv = document.querySelector('#results-click-scissors');

    // Resets text content to empty only displaying one result message at a time
    paperResultDiv.textContent = '';
    rockResultDiv.textContent = '';
    scissorsResultDiv.textContent = '';

    // Tie condition
    if (compChoice === userChoice) {
        if (tieCounter > 0) {
            tieCounter++;
            paperResultDiv.textContent = `It's a tie again x${tieCounter - 1}!`
        }
        else {
            paperResultDiv.textContent = 'It\'s a tie!';
            tieCounter++;
        }
        // Win conditions
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        playerScore++;
        updateScore();
        rockResultDiv.textContent = 'You win! Rock beats scissors.';
        tieCounter = 0;

    } else if (userChoice === 'paper' && compChoice === 'rock') {
        playerScore++;
        updateScore();
        paperResultDiv.textContent = 'You win! Paper beats rock.';
        tieCounter = 0;

    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        playerScore++;
        updateScore();
        scissorsResultDiv.textContent = 'You win! Scissors beats paper.';
        tieCounter = 0;

        // Lose conditions
    } else if (compChoice === 'scissors' && userChoice === 'paper') {
        computerScore++;
        updateScore();
        paperResultDiv.textContent = 'You lost! Paper does not beat scissors.'
        tieCounter = 0;

    } else if (compChoice === 'rock' && userChoice === 'scissors') {
        computerScore++;
        updateScore();
        scissorsResultDiv.textContent = 'You lost! Scissors does not beat rock.'
        tieCounter = 0;

    } else if (compChoice === 'paper' && userChoice === 'rock') {
        computerScore++;
        updateScore();
        rockResultDiv.textContent = 'You lost! Rock does not beat paper.'
        tieCounter = 0;

        // No condition
    } else {
    }

    if (computerScore === 5 || playerScore === 5) {
        rockBtn.removeEventListener('click', initiateRound);
        paperBtn.removeEventListener('click', initiateRound);
        scissorsBtn.removeEventListener('click', initiateRound);
        console.log('Done!')

        if (computerScore < playerScore) {
            gameOverMessage('win');
        } else {
            gameOverMessage('');
        }
    }
}

const playerScoreDiv = document.querySelector('#play-score-number');
const computerScoreDiv = document.querySelector('#comp-score-number');

function updateScore() {
    playerScoreDiv.textContent = `${playerScore}`;
    computerScoreDiv.textContent = `${computerScore}`;
}
// Game over message
const gameInfo = document.querySelector('#game-info');
function gameOverMessage(win) {
    if (win === 'win') {
        gameInfo.textContent = 'Congrats! You beat the computer. Click the reset button at the bottom to play again.'
        gameInfo.style.cssText = 'color: #fff; background-color: var(--lightGreen); border: solid #fff 3px;'
    } else {
        gameInfo.textContent = 'You lost. Try again by clicking the reset button at the bottom.'
        gameInfo.style.cssText = 'color: #fff; background-color: var(--imperialRed); border: solid #fff 3px'
    }
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
