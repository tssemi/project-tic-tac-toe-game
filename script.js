function newGame() {
    let spots = document.querySelectorAll('.game-board .spot');
    const  startGame = () => {
        spots.forEach(e => {
            e.textContent = '*';
        });    
    }
    return {spots, startGame}
}

const gameBoard = newGame();

const start = document.querySelector('#start');
start.addEventListener('click', () => {
    gameBoard.startGame();
});

gameBoard.spots.forEach(e => {
    e.addEventListener('click', () => {
        e.textContent = 'X'
    })
});