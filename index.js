// add DOM display elements
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const computerChoice = document.querySelector('.computer-choice');
const gameResult = document.querySelector('.game-result');

// add DOM button elements
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const newGameBtn = document.querySelector('.new-game-btn');

// add event listeners

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
newGameBtn.addEventListener('click', () => handleClick('newgame'));

// determine outcome of a single game
function determineOutcome(player, computer) {
    if (player === computer) {
        return 'tie';
    } else if ((player === 'rock' && computer === 'scissors') ||
                (player === 'scissors' && computer === 'paper') ||
                (player === 'paper' && computer === 'rock')) {
        return 'player';
    } else {
        return 'computer';
    }
}

// randomly determine computer choice
function determineComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const x = Math.floor(Math.random() * 3);
    return choices[x];
}

