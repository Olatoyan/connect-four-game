function checkDirection(
  startRow,
  startCol,
  rowDelta,
  colDelta,
  currentPlayer,
  board,
) {
  const ROWS = board.length;
  const COLS = board[0].length;
  const cellValue =
    currentPlayer === "computer" ? "counter-yellow-large" : "counter-red-large";

  for (let i = 0; i < 4; i++) {
    const row = startRow + i * rowDelta;
    const col = startCol + i * colDelta;

    if (
      row < 0 ||
      row >= ROWS ||
      col < 0 ||
      col >= COLS ||
      board[row][col] !== cellValue
    ) {
      return false;
    }
  }

  return true;
}

function checkForComputerWin(board, currentPlayer) {
  const ROWS = board.length;
  const COLS = board[0].length;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (
        // Check horizontal
        checkDirection(row, col, 0, 1, currentPlayer, board) ||
        // Check vertical
        checkDirection(row, col, 1, 0, currentPlayer, board) ||
        // Check diagonal (top-left to bottom-right)
        checkDirection(row, col, 1, 1, currentPlayer, board) ||
        // Check diagonal (bottom-left to top-right)
        checkDirection(row, col, -1, 1, currentPlayer, board)
      ) {
        return true;
      }
    }
  }

  return false;
}

function simulateMove(board, column, currentPlayer) {
  const tempBoard = board.map((row) => row.slice());
  for (let row = tempBoard.length - 1; row >= 0; row--) {
    if (!tempBoard[row][column]) {
      tempBoard[row][column] =
        currentPlayer === "computer"
          ? "counter-yellow-large"
          : "counter-red-large";
      break;
    }
  }
  return tempBoard;
}

function determineComputerMove(board) {
  const availableColumns = board[0]
    .map((cell, index) => (cell === null ? index : null))
    .filter((col) => col !== null);

  // Check for a winning move for the computer
  for (const column of availableColumns) {
    const tempBoard = simulateMove(board, column, "computer");
    if (checkForComputerWin(tempBoard, "computer")) {
      return column;
    }
  }

  // Check for a potential win for the player and block it
  for (const column of availableColumns) {
    const tempBoard = simulateMove(board, column, "player");
    if (checkForComputerWin(tempBoard, "player")) {
      return column;
    }
  }

  // If no winning or blocking move, play a random move
  return availableColumns[Math.floor(Math.random() * availableColumns.length)];
}

export { checkForComputerWin, determineComputerMove };
