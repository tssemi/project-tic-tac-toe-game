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

    let sign;
    const setSign = (value) => sign = value;
    const getSign = () => sign;


    return {getName, getScore, sumScore, setSign, getSign}
}

const gameBoard = newGame();
let player1;
let player2 = playerInfo('player 2');

const chooseSign = document.querySelector(".sign");

const start = document.querySelector('#start');
start.addEventListener('click', () => {
    player1 = playerInfo(prompt('Insert your name', ));
    chooseSign.style.display = 'block';
});

const signBtns = document.querySelectorAll(".signBtn");
signBtns.forEach(e => {
    e.addEventListener('click', event => {
        gameBoard.startGame();
        chooseSign.style.display = 'none';
        player1.setSign(event.target.value);
        if (player1.getSign() = 'X') {
            player2.setSign('O');
        } else player2.setSign('x');
        
    })
});

gameBoard.spots.forEach(e => {
    e.addEventListener('click', () => {
        e.textContent = player1.getSign();
    })
});