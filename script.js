function newGame() {
    let spots = document.querySelectorAll('.game-board .spot');
    
    const getSpots = () => spots;

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
        let bool = false;
        /*
        winCombinations.forEach(ele => {
            if (bool === false) {
                if (spots[ele[0]].textContent === spots[ele[1]].textContent && spots[ele[1]].textContent === spots[ele[2]].textContent) {
                    bool = true;
                } 
            }
        });*/

        for (const ele of winCombinations) {
            if (spots[ele[0]].textContent === spots[ele[1]].textContent && spots[ele[1]].textContent === spots[ele[2]].textContent) {
                bool = true;
            }    
        }

        return bool
    };

    const finishGame = () => {

    }
    return {getSpots, startGame, p2turn, check, finishGame}
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

const chooseSign = document.querySelector(".sign");
const start = document.querySelector('.new-game');

let player1;
let player2 = playerInfo('Player two');

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
            
            if (gameBoard.check()) gameBoard.finishGame()
            gameBoard.p2turn();
            if (gameBoard.check()) gameBoard.finishGame()
        }
    })
});