// asks the user for their selection and returns their input
function playerSelection() {
    let choice;
    choice = prompt("Pick rock, paper, or scissors: "); // stores user input in choice
    return choice.toLowerCase(); // return user input in all lowercase making it case-insensitive
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

function playRound(compChoice, userChoice) {
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