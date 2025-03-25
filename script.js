function newGame() {
    let spots = document.querySelectorAll('.game-board .spot');
    const getSpots = () => spots;

    const startGame = () => {
        spots.forEach(e => e.textContent = '*');    
    };

    const p1turn = () => {

    }

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
        const winCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        winCombinations.forEach(e => {
            
        });
    };
    return {getSpots, startGame, p1turn, p2turn, check}
}

function playerInfo(playerName) {
    const name = playerName;
    const getName = () => name;
    let sign;
    const setSign = (value) => sign = value;
    const getSign = () => sign;

    return {getName, setSign, getSign}
}

const gameBoard = newGame();
let player1;
let player2 = playerInfo('Player two');

const chooseSign = document.querySelector(".sign");
const start = document.querySelector('.new-game');

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

gameBoard.getSpots().forEach(e => {
    e.addEventListener('click', () => {
        if (e.textContent != player1.getSign() && e.textContent != player2.getSign()) {
            e.textContent = player1.getSign();
            gameBoard.check();
            gameBoard.p2turn();
            gameBoard.check();
        }
    })
});