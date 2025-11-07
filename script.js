const gameBoard = {
    player1: {
        name: '',
        sign: 'X'
    },
    player2: {
        name: '',
        sign: 'O'
    },
    start: startGame,

}

const startButton = document.querySelector('.button');
    startButton.addEventListener('click', () => {
        gameBoard.player1.name = prompt('Player X: ', );
        gameBoard.player2.name = prompt('Player O: ', );
        console.log(gameBoard.player1.name)
        gameBoard.start(0);
    })

//Console game
 function startGame(num) {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(e => {
            e.textContent = ' ';
        });
    let count = num;

    cells.forEach(e => {
    e.addEventListener('click', () => cellClicked(e))
    });
//Player's input
    function cellClicked(e) {
        if (count % 2 === 0) {
            e.textContent = 'X';
            count++;
            if (checkBoard() == true) {
                console.log('X won')
            };
            console.log(count)
        } else {
            e.textContent = 'O';
            count++;
            if (checkBoard() == true) {
                console.log('O won')
            };
            console.log(count)
        };
    }
//Check board
    const checkBoard = () => {
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
                gameOver();
                return true
            };
        }
        return false
    };

//Game Over
    const gameOver = () => {
        let cells = document.querySelectorAll('.cell');
        cells.forEach(e => e.removeEventListener('click', () => cellClicked));
    }

    return {cells}
}

