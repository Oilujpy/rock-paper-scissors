// function expression
const computerChoice = () => {
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

// function expression
const humanChoice = (event) => {
    return event.target.id;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // moved playRound function per requirement
    function playRound(humanChoice, computerChoice) {
        winMsg = `You win! ${humanChoice} beats ${computerChoice}`;
        loseMsg = `You lose! ${computerChoice} beats ${humanChoice}`
        draw = `It's a draw! ${computerChoice} can't beat ${humanChoice}`

        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            console.log(winMsg);
            humanScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
            console.log(loseMsg);
            computerScore++;
        }
        else {
            console.log(draw);
        }
    }

    // buttons reference
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    // event to buttons
    rockBtn.addEventListener("click", (e) => playRound(humanChoice(e), computerChoice()));
    paperBtn.addEventListener("click", (e) => playRound(humanChoice(e), computerChoice()));
    scissorsBtn.addEventListener("click", (e) => playRound(humanChoice(e), computerChoice()));

    // score for the 5 rounds
    console.log(`Human Score: ${humanScore} ... Computer score: ${computerScore}`);
}


// play the game
playGame();
