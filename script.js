document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            const index = cell.dataset.index;
            if (gameBoard[index] === "" && !checkWinner()) {
                gameBoard[index] = currentPlayer;
                cell.innerText = currentPlayer;
                if (checkWinner()) {
                    alert(`${currentPlayer} wins!`);
                    resetGame();
                } else if (!gameBoard.includes("")) {
                    alert("It's a tie!");
                    resetGame();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }

        return false;
    }

    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        cells.forEach((cell) => {
            cell.innerText = "";
        });
    }
});
