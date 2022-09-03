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
    let userChoice = playerSelection(event);
    let compChoice = getComputerChoice();;
    // Tie condition
    console.log(`Computer Choice: ${compChoice}`);
    console.log(`Your Choice: ${userChoice}`);
    if (compChoice === userChoice) {
        return 'It\'s a tie!';
        // Win conditions
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        return 'You win! Rock beats scissors.';

    } else if (userChoice === 'paper' && compChoice === 'rock') {
        return 'You win! Paper beats rock.';

    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        return 'You win! Scissors beats paper.';
        // Lose conditions
    } else if (compChoice === 'scissors' && userChoice === 'paper') {
        return 'You lose! Scissors beats paper.';

    } else if (compChoice === 'rock' && userChoice === 'scissors') {
        return 'You lose! Rock beats scissors.';

    } else if (compChoice === 'paper' && userChoice === 'rock') {
        return 'You lose! Paper beats rock.';
        // No condition
    } else {
        return 'No conditions met!'
    }
}
// plays a game of rock paper scissors for 5 rounds
function game() {
    let computerScore = 0;
    let playerScore = 0;
    let result;

    // for (let i = 0; i < 5; i++) { // iterates 5 times to simulate 5 rounds
    result = playRound(getComputerChoice(), playerSelection()); // Stores result string from playRound()
    if (result.includes('win')) { // Uses includes() string method to determine where to add a point
        playerScore++;
        console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
    } else if (result.includes('lose')) {
        computerScore++;
        console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
    } else {
        console.log('Tie!')
    }
    // }
    return (playerScore === computerScore) ? `It's a tie! Play again?` : (playerScore > computerScore) ? 'You win! Play again?' : (playerScore < computerScore) ? 'You lose! Play again?' : 'Oops! Error!';
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
