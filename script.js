//Console game:
 function createGame() {
    let cells = document.querySelectorAll('.cell');
    let count = 0;

//User's turn
    cells.forEach(e => {
    e.addEventListener('click', () => {
        if (e.textContent == ' ') {
            e.textContent = 'X';
            count += 1;
            if (count < 9) browsersTurn();
            checkBoard();
        }
        })
    });
//Browser's turn
    const browsersTurn = () => {
        let num = Math.floor(Math.random() * 8 + 1);
        while (cells[num].textContent == 'X' || cells[num].textContent == 'O') {
            num = Math.floor(Math.random() * 8) + 1;
        }
        cells[num].textContent = 'O';
        count += 1;
    };
//Check board
/*
lines:
[0, 1, 2]  [0, 3, 6]  [0, 4, 8]
[3, 4, 5]  [1, 4, 7]  [6, 4, 2]
[6, 7, 8]  [2, 5, 8]
*/
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
                console.log(lines[i]);
            };
        }
    };


    const startButton = document.querySelector('.button');
    startButton.addEventListener('click', () => {
        cells.forEach(e => {
            e.textContent = ' ';
        });
        count = 0;
    })

//whoever the user or the browser makes a line wins and the winner must be shown
    return {cells}
}

const gameBoard = createGame();
