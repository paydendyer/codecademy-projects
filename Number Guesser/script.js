let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9) + 1;
};
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);
const compareGuesses = (humanScore, computerScore, currentRoundNumber) => {
  if (getAbsoluteDistance(humanScore,currentRoundNumber) <= getAbsoluteDistance(computerScore,currentRoundNumber)) {
    return true;
  } else{
    return false;
  }
};
const updateScore = (winner) => {
  if (winner === humanScore) {
    return humanScore++;
  } else if (winner === computerScore) {
    return computerScore++;
  }
};
const advanceRound = () => {
  return currentRoundNumber++;
};
