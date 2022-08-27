// asks the user for their selection and returns their input
function playerSelection() {
    let choice;
    choice = prompt("Pick rock, paper, or scissors: "); // stores user input in choice
    return choice.toLowerCase(); // return user input in all lowercase making it case-insensitive
}
