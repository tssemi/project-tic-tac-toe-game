//Console game:
 function createGame() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(e => {
    e.addEventListener('click', () => {
        if (e.textContent == ' ') {
            e.textContent = 'X';
            browsersTurn();
        };

        })
    });
//immediately (for now maybe) after that, an O sign must be shown in a random cell
    const browsersTurn = () => {
        let num = Math.floor(Math.random() * 8 + 1);
        while (cells[num].textContent == 'X' || cells[num].textContent == 'O') {
            num = Math.floor(Math.random() * 8) + 1;
        }
        cells[num].textContent = 'O';
    }
//make a function to check when the board is full or someone made a line


    const startButton = document.querySelector('.button');
    startButton.addEventListener('click', () => {
        cells.forEach(e => {
            e.textContent = ' ';
        });
    })

//whoever the user or the browser makes a line wins and the winner must be shown
    return {cells}
}

const gameBoard = createGame();
