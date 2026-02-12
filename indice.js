const ROCK = "ROCK", PAPER = "PAPER", SCISSORS = "SCISSORS";
const game = [ROCK, PAPER, SCISSORS] // array
let humanScore = 0, computerScore = 0, draw = 0, computerChoice = "", humanChoice = "", totalRounds = 5, currentRound = 1;

/**
 * Decorrer do jogo
 * 1. utilizador escolhe entre pedra, papel, tesoura
 * 
**/

// elementos do jogo
const buttons = document.getElementById('humanChoice').querySelectorAll("button"); // variável que esta armazenando os botoes
const computerChoiceDiv = document.querySelector(".computerChoice")
const points = document.querySelector(".points")

function setHumanChoice(choice) {// função recebe a escolha do utilizador
  humanChoice = choice;
}

function setComputerChoice() { // função escolha do computador é random
  computerChoice = game[Math.floor(Math.random() * game.length)]; // retorna valor aleatorio entre 0 e 2. random são números flutuantes e floor serve para arredondar os números.
  computerChoiceDiv.textContent = `Computer choice: ${computerChoice}`
}
 function addUpthedraws(){// funcao para somar os empates

 }
 
function determineWinner() {  // função para deteminar quem ganhou a partida

  if (computerChoice === humanChoice) {
    console.log("It's a tie!")
    draw++;
  }
  else if (
    humanChoice === ROCK && computerChoice === SCISSORS ||
    humanChoice === PAPER && computerChoice === ROCK ||
    humanChoice === SCISSORS && computerChoice === PAPER
  ) {
    console.log(`Pont for you! ${humanChoice} beats ${computerChoice}`);
    console.log(`Point: ${humanScore}.`);
    humanScore++;
  }
  else {
    console.log(`computer point! ${computerChoice} beats ${humanChoice}`);
    console.log(`Point: ${computerScore}`);
    computerScore++;
  }
  points.textContent = `Player: ${humanScore} - Computer: ${computerScore} - Draws: ${draw}`

}


function renderResult() {
  if (humanScore > computerScore) {
    console.log("You win! Well played.");
    console.log(`${humanScore} X ${computerScore}`);
  }
  else {
    console.log("Game Over!You lost.")
    console.log(`${computerScore} X ${humanScore}`);
  }
}

function isGameOver() {
  return currentRound === totalRounds
}

function jogar(evento) {
  const choice = evento.target.id;
  setHumanChoice(choice)
  setComputerChoice();
  determineWinner();
  renderResult();

  if (isGameOver()) {
    const botaoJogarNovamente = document.getElementById('jogar-novamente');
    botaoJogarNovamente.hidden = false;
    buttons.forEach((button) => {
      button.removeEventListener("click", jogar)
    });
    botaoJogarNovamente.addEventListener('click', () => {
      window.location.reload()
    })
    alert('FIM DE JOGO')
    return;
  }

  currentRound++;
}

buttons.forEach((button) => {
  button.addEventListener("click", jogar)
});