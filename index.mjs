let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  document.getElementById(
    "score"
  ).innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 5) {
    document.getElementById("result").innerText =
      "Congratulations! You are the winner!";
    resetGame();
  } else if (computerScore === 5) {
    document.getElementById("result").innerText =
      "Oops! Computer is the winner. Try again!";
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorsBtn = document.querySelector("#scissors-button");
const resultDiv = document.getElementById("result");

rockBtn.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  resultDiv.innerText = playRound(playerSelection, computerSelection);
  updateScore();
  checkWinner();
});

paperBtn.addEventListener("click", () => {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  resultDiv.innerText = playRound(playerSelection, computerSelection);
  updateScore();
  checkWinner();
});

scissorsBtn.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  resultDiv.innerText = playRound(playerSelection, computerSelection);
  updateScore();
  checkWinner();
});
