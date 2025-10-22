//Beginning:
//the user will have to put their name so it can be stored

//Console game:
//make every cell interactive for the user
 function createGame() {
    let cells = document.querySelectorAll('.cell');
//every time the user clicks on a space an X sign must appear
    
    cells.forEach(e => {
    e.addEventListener('click', () => {
            e.textContent = 'X';
        })
    });
//when the start button is pressed the board must be clean
    const bttnStart = document.querySelector('.bttn');
    bttnStart.addEventListener('click', () => {
        console.log('cells')
        cells.forEach(e => {
            e.textContent = '';
        });
    })


    return {cells}
 }

 const gameBoard = createGame();

//immediately (for now maybe) after that an O sign must be shown in a random cell
//whoever the user or the browser makes a line wins and the winner must be shown
//to start the game again press the button
