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
            console.log("player " + count);
            if (count < 9) browsersTurn();
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
        console.log("brow " + count);
    };
//Check board

    const checkWinner = () => {

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
