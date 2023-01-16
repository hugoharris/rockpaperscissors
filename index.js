// add DOM display elements
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const playerChoiceEl = document.querySelector('.player-choice');
const computerChoiceEl = document.querySelector('.computer-choice');
const gameResultEl = document.querySelector('.game-result');
const matchResultEl = document.querySelector('.match-result');

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

// initialize scores and newGameBtn
let playerScore = 0;
let computerScore = 0;
newGameBtn.style.display = 'none';

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

// update choice elements and game winner element
function updateGameElements(playerChoice, computerChoice, gameResult) {
    const wins = " WINS"
    playerChoiceEl.innerHTML = `<p>Player picks: ${playerChoice}</p>`;
    computerChoiceEl.innerHTML = `<p>Computer picks: ${computerChoice}</p>`;
    gameResultEl.innerHTML = `<p>${gameResult.toUpperCase()}${gameResult !== 'tie' ? wins : '' }!</p>`;
}

// clear choice elements and game winner element
function clearGameElements(playerChoice, computerChoice, gameResult) {
    const wins = " WINS"
    playerChoiceEl.innerHTML = ``;
    computerChoiceEl.innerHTML = ``;
    gameResultEl.innerHTML = ``;
}

// handle click events
function handleClick(click) {
    if (click === 'newgame') {
        // reset to new game
        playerScore = 0;
        computerScore = 0;
        matchResultEl.innerHTML = '';
        updateScoreElements();
        newGameBtn.style.display = 'none';
    } else if (computerScore === 5 || playerScore === 5) {
        // prevent more turns from running if score 5 has been reached
        return;
    } else {
        // handle player inputs
        const playerChoice = click;
        const computerChoice = determineComputerChoice();
        const gameResult = determineOutcome(playerChoice, computerChoice);
        updateGameElements(playerChoice, computerChoice, gameResult);
        if (gameResult === 'player') {
            playerScore += 1;
        } else if (gameResult === 'computer') {
            computerScore += 1;
        }
        updateScoreElements();
    }

    // did someone reach 5?
    if (computerScore === 5 || playerScore === 5) {
        matchResultEl.innerHTML = `<p>${computerScore === 5 ? "COMPUTER" : "PLAYER" } WINS THE MATCH!</p>`;
        newGameBtn.style.display = 'block';
        updateScoreElements();
        clearGameElements();
    }
}

