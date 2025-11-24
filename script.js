const board = document.querySelector('.game-board');

const cells = document.querySelectorAll('.cell');
const startButton = document.querySelector('.button');
const winnerTag = document.querySelector('.winner-tag');
const gameBoard = createGame();

startButton.addEventListener('click', () => {
    startButton.textContent = 'Restart Game';
    gameBoard.players.p1 = prompt('X Player: ', );
    gameBoard.players.p2 = prompt('O Player: ', );

    cells.forEach(e => e.addEventListener('click', () => gameBoard.cellClicked(e)));

    gameBoard.initiateGame();
})


function createGame() {
    let count;

    function initiateGame() {
        cells.forEach(e => e.textContent = ' ');
        count = 0;
    }

    function cellClicked(e) {
        if (e.textContent == false) {
            if (count % 2 === 0) {
                e.textContent = 'X';
                count++;
                if (count >= 5) {
                    if (checkBoard()[0] == true && checkBoard()[1] == 'X') console.log(gameBoard.gameOver('X'));
                }
            } else {
                e.textContent = 'O';
                count++;
                if (count >= 5) {
                    if (checkBoard()[0] == true && checkBoard()[1] == 'O') console.log(gameBoard.gameOver('O'));
                }
            }
        }
    }

    function checkBoard() {
        let bool = false;
        const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const cellA = cells[line[0]].textContent;
            const cellB = cells[line[1]].textContent;
            const cellC = cells[line[2]].textContent;

            if (cellA == false || cellB == false || cellC == false) {
                continue;
            } else if (cellA == cellB && cellB == cellC) {
                return [true, cellA];
            };
        }
        return bool;
    }

    function gameOver(sign) {
        winnerTag.lastElementChild.textContent = gameBoard.winner;
        //cells.forEach(e => e.removeEventListener('click', cellClicked()));
        return sign == 'X' ? gameBoard.players.p1 : gameBoard.players.p2
    }

    return {
        players: {p1: '', p2: ''},

        initiateGame,

        cellClicked,

        gameOver,
    }
}