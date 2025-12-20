const board = document.querySelector('.game-board');

const cells = document.querySelectorAll('.cell');
const startButton = document.querySelector('.button');
const winnerTag = document.querySelector('.winner-tag div:last-of-type');
const gameBoard = createGame();

startButton.addEventListener('click', () => {
    startButton.textContent = 'Restart Game';
    gameBoard.players.p1 = prompt('X Player: ', );
    gameBoard.players.p2 = prompt('O Player: ', );
    
    gameBoard.initiateGame();
})

function createGame() {
    let count;
    const controller = new AbortController();

    function initiateGame() {
        cells.forEach(e => e.textContent = ' ');
        cells.forEach(e => e.addEventListener('click', () => cellClicked(e), { signal: controller.signal }));
        count = 0;
    }

    const cellClicked = (e) => {
        if (e.textContent == false) {
            if (count % 2 === 0) {
                e.textContent = 'X';
                count++;
                if (count >= 5) {
                    if (checkBoard()[0] == true && checkBoard()[1] == 'X') gameOver('X');
                }
            } else {
                e.textContent = 'O';
                count++;
                if (count >= 5) {
                    if (checkBoard()[0] == true && checkBoard()[1] == 'O') gameOver('O');
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
        cells.forEach(e => {
            if (e.textContent == false) {
                controller.abort();  
            }
        });
        winnerTag.textContent = sign == 'X' ? gameBoard.players.p1 : gameBoard.players.p2;
    }

    return {
        players: {p1: '', p2: ''},

        initiateGame,

        cellClicked,
    }
}