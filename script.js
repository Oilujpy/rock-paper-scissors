function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock"
    }
    else if (randomNumber === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Welcome to Rock, Paper and Scissors! Pick your weapon:").toLocaleLowerCase();
    return choice;
}
