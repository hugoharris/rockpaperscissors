// add DOM display elements
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const computerChoiceEl = document.querySelector('.computer-choice');
const gameResultEl = document.querySelector('.game-result');

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

// initialize scores
let playerScore = 0;
let computerScore = 0;

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

// update score elements
function updateScoreElements() {
    playerScoreEl.innerHTML = playerScore;
    computerScoreEl.innerHTML = computerScore;
}

// handle click events
function handleClick(click) {
    if (click === 'newgame') {
        // reset to new game
        playerScore = 0;
        computerScore = 0;
        updateScoreElements();
    } else {
        // handle player inputs
        const playerChoice = click;
        const computerChoice = determineComputerChoice();
        const gameResult = determineOutcome(playerChoice, computerChoice);
        gameResultEl.innerHTML = gameResult;
        if (gameResult === 'player') {
            playerScore += 1;
        } else if (gameResult === 'computer') {
            computerScore += 1;
        }
        updateScoreElements();
    }
}

