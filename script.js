const cells = document.querySelectorAll('.cell');
const startButton = document.querySelector('.button');
let gameBoard = createGame();

startButton.addEventListener('click', () => {
    gameBoard.players.p1 = prompt('X Player: ', );
    gameBoard.players.p2 = prompt('O Player: ', );
    gameBoard.game.finishingGame(gameBoard.game.startingGame(0, gameBoard.player1.name, gameBoard.player2.name));
})

function createGame() {
    return {
        players: {p1: '', p2: ''},


        initiateGame() {
            cells.forEach(e => e.textContent = ' ');
        }


    }

}

//Console game
 function startingGame(num, p1, p2) {
    //const cells = document.querySelectorAll('.cell');
    let count = num;

    cells.forEach(e => e.textContent = ' ');

    cells.forEach(e => e.addEventListener('click', () => cellClicked(e)));
//Player's input
    function cellClicked(e) {
        if (e.textContent == false) {
            if (count % 2 === 0) {
                e.textContent = 'X';
                count++;
                if (count >= 5) {
                    if (checkBoard()[0] == true && checkBoard()[1] == 'X') gameOver(p1);
                };
            } else {
                e.textContent = 'O';
                count++;
                if (count >= 5) {
                    if (checkBoard()[0] == true && checkBoard()[1] == 'O') gameOver(p2);
                };
            };    
        }
    }
//Check board
    const checkBoard = () => {
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
    };

    const gameOver = (winner) => {
        return {winner}
    }

    return {gameOver}
}

function finishingGame(winner) {
    console.log('winner ' + winner);
}