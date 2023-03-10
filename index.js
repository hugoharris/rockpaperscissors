function game() {

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

    // add sounds
    let flash = new Audio('./sound.wav');
    let applause = new Audio('./applause.wav');

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

    // update score elements and animate the result
    function updateScoreElements() {
        playerScoreEl.innerHTML = playerScore;
        computerScoreEl.innerHTML = computerScore;
        playerChoiceEl.style.visibility = 'hidden';
        playerChoiceEl.style.right = '2000px';
        setTimeout(() => {
            playerChoiceEl.style.visibility = 'visible';
            playerChoiceEl.style.right = '0';
        }, 300);
        computerChoiceEl.style.visibility = 'hidden';
        computerChoiceEl.style.left = '2000px';
        setTimeout(() => {
            computerChoiceEl.style.visibility = 'visible';
            computerChoiceEl.style.left = '0';
        }, 300);
    }

    // update choice elements and game winner element
    function updateGameElements(playerChoice, computerChoice, gameResult) {
        const wins = " WINS"
        playerChoiceEl.innerHTML = `<p>Player picks: ${playerChoice}</p>`;
        computerChoiceEl.innerHTML = `<p>Computer picks: ${computerChoice}</p>`;
        gameResultEl.innerHTML = `<p>${gameResult.toUpperCase()}${gameResult !== 'tie' ? wins : '' }!</p>`;
    }

    // clear choice elements and game winner element
    function clearGameElements() {
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
            // handle player inputs and animate result
            flash.play();
            gameResultEl.style.fontSize = '1rem';
            setTimeout(() => {gameResultEl.style.fontSize = '2rem';}, 200);
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
            applause.play();
            newGameBtn.style.display = 'block';
            updateScoreElements();
            clearGameElements();
        }
    }
}

game();