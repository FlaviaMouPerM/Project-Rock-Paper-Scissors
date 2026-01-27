console.log("Hello World");
const ROCK = "ROCK", PAPER = "PAPER", SCISSORS = "SCISSORS";
const game = [ROCK, PAPER, SCISSORS] // array
const humanScore = 0, computerScore = 0, draw = 0, computerChoice = "", humanChoice = "", message = "What's your choice?", playRound = 5;

function getComputerChoice() {
  return Math.floor(Math.random() * game.length); // retorna valor aleatorio entre 0 e 2. random são números flutuantes e floor serve para arredondar os números.
}

function getHumanChoice(choice) {
   const choice = prompt(message);
  return choice.toUpperCase();
}

for( let i = 0; i<=playRound; i++)
{
    computerChoice = getComputerChoice(game)
  /*console.log(computerChoice, game[computerChoice])*/
    humanChoice = getHumanChoice()
  /*console.log(humanChoice)*/

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
  console.clear();

}

if(humanScore > computerScore){
  console.log("You win! Well played.");
  console.log(`${humanScore} X ${computerScore}`);
}
else{
  console.log("Game Over!You lost.")
  console.log(`${computerScore} X ${humanScore}`);
}