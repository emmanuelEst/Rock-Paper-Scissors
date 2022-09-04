// asks the user for their selection and returns their input
function playerSelection(event) {
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
    const resultDiv = document.querySelector('#result');
    const playerChoiceDiv = document.querySelector('#player-choice');
    const computerChoiceDiv = document.querySelector('#comp-choice');
    let userChoice = playerSelection(event);
    let compChoice = getComputerChoice();

    computerChoiceDiv.textContent = `Computer Choice: ${compChoice}`;
    playerChoiceDiv.textContent = `Player Choice: ${userChoice}`;
    // Tie condition
    if (compChoice === userChoice) {
        resultDiv.textContent = 'It\'s a tie!';
        // Win conditions
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        resultDiv.textContent = 'Result: You win! Rock beats scissors.';

    } else if (userChoice === 'paper' && compChoice === 'rock') {
        resultDiv.textContent = 'Result: You win! Paper beats rock.';

    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        resultDiv.textContent = 'Result: You win! Scissors beats paper.';
        // Lose conditions
    } else if (compChoice === 'scissors' && userChoice === 'paper') {
        resultDiv.textContent = 'Result: You lose! Scissors beats paper.';

    } else if (compChoice === 'rock' && userChoice === 'scissors') {
        resultDiv.textContent = 'Result: You lose! Rock beats scissors.';

    } else if (compChoice === 'paper' && userChoice === 'rock') {
        resultDiv.textContent = 'Result: You lose! Paper beats rock.';
        // No condition
    } else {
        resultDiv.textContent = 'Result: No conditions met!'
    }
}

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

rockBtn.addEventListener('click', (e) => {
    playRound(e);
});
paperBtn.addEventListener('click', (e) => {
    playRound(e);
});
scissorsBtn.addEventListener('click', (e) => {
    playRound(e);
});
