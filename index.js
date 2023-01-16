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

