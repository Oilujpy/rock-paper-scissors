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

const humanChoice = (event) => {
    return event.target.id;
}

const getWinner = (scoreHuman, scoreComputer, scoreWebElement, resultWebElement) => {
    if (scoreHuman >= 5) {
        scoreWebElement.textContent = "YOU WIN!";
        resultWebElement.appendChild(scoreWebElement);
    } else if (scoreComputer >= 5) {
        scoreWebElement.textContent = "COMPUTER WINS!";
        resultWebElement.appendChild(scoreWebElement);
    }
}
 
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
 
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {playRound(humanChoice(e), computerChoice())})
    })

    function playRound(humanChoice, computerChoice) {
        const results = document.querySelector(".results");
        const score = document.createElement("p");

        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            score.textContent = `Human: ${humanScore} ... Computer: ${computerScore} | ${humanChoice} beats ${computerChoice}`;
            results.appendChild(score);
        }
        else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            score.textContent = `Human: ${humanScore} ... Computer: ${computerScore} | ${computerChoice} beats ${humanChoice}`;
            results.appendChild(score);
        }
        else {
            score.textContent = `Human: ${humanScore} ... Computer: ${computerScore} | ${computerChoice} can't beat ${humanChoice}`;
            results.appendChild(score);
        }

        getWinner(humanScore,computerScore,score,results);
    }
}

playGame();
