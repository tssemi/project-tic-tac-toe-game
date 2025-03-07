function newGame() {
    const  startGame = () => {
        let spots = document.querySelectorAll('.game-board .spot');
        spots.forEach(e => {
            e.textContent = '*';
        });    
    }
    return {startGame}
}

const gameBoard = newGame();

const start = document.querySelector('#start');
start.addEventListener('click', () => {
    gameBoard.startGame();
    
}); 