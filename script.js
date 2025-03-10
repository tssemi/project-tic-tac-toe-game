function newGame() {
    let spots = document.querySelectorAll('.game-board .spot');
    
    const startGame = () => {
        spots.forEach(e => e.textContent = '*');    
    };

    const check = () => {
        
    };
    
    return {spots, startGame, check}
}

function playerInfo(playerName) {
    const name = playerName;
    const getName = () => name;

    let score = 0;
    const getScore = () => score
    const sumScore = () => ++score;

    /*let sign;
    const chooseSign = () => {
        
    };*/


    return {getName, getScore, sumScore}
}

const gameBoard = newGame();

const start = document.querySelector('#start');
start.addEventListener('click', () => {
    gameBoard.startGame();
});

gameBoard.spots.forEach(e => {
    e.addEventListener('click', () => {
        e.textContent = 'X';

    })
});