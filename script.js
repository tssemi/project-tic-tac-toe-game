function newGame() {
    let spots = document.querySelectorAll('.game-board .spot');
    const winCombinations = [
        [spots[0], spots[1], spots[2]],
        [spots[3], spots[4], spots[5]],
        [spots[6], spots[7], spots[8]],
        [spots[0], spots[3], spots[6]],
        [spots[1], spots[4], spots[7]],
        [spots[2], spots[5], spots[8]],
        [spots[0], spots[4], spots[8]],
        [spots[2], spots[4], spots[6]],
    ];

    const startGame = () => {
        spots.forEach(e => e.textContent = '*');    
    };

    const p2turn = () => {
        let random = '';
        do {
            random = Math.floor(Math.random() * 9)
        } while (
            spots[random].textContent == player1.getSign() ||
            spots[random].textContent == player2.getSign()
        );
        spots[random].textContent = player2.getSign();
    }

    const check = () => {
        
    };
    
    return {spots, startGame, check, p2turn}
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
let player2 = playerInfo('Player two');

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
        if (player1.getSign() == 'X') {
            player2.setSign('O');
        } else player2.setSign('X');
    })
});

gameBoard.spots.forEach(e => {
    e.addEventListener('click', () => {
        if (e.textContent != player1.getSign() && e.textContent != player2.getSign()) {
            e.textContent = player1.getSign();
            gameBoard.check();
            gameBoard.p2turn();
            gameBoard.check();
        }
    })
});