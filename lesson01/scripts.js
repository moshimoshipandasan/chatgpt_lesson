let board = Array(9).fill(null);
let currentPlayer = 'O';
let gameOver = false;

function makeMove(index) {
    if (board[index] || gameOver) {
        return;
    }

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    if (checkWin()) {
        alert(`${currentPlayer}の勝ちです！`);
        gameOver = true;
    } else if (board.every(cell => cell !== null)) {
        alert('引き分けです。');
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winConditions.some(condition =>
        condition.every(index => board[index] === currentPlayer)
    );
}
