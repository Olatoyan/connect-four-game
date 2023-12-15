import { createSlice } from "@reduxjs/toolkit";

const initialGameBoard = Array.from({ length: 6 }, () => Array(7).fill(null));

const initialState = {
  playerOneScore: parseInt(localStorage.getItem("playerOneScore")) || 0,
  playerTwoScore: parseInt(localStorage.getItem("playerTwoScore")) || 0,

  currentPlayer: "playerOne",
  winner: null,
  timer: 30,
  gameBoard: initialGameBoard,
  winningTiles: [],
  isMenuOpen: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    updatePlayerOneScore(state) {
      state.playerOneScore++;
      localStorage.setItem("playerOneScore", state.playerOneScore.toString());
    },
    updatePlayerTwoScore(state) {
      state.playerTwoScore++;
      localStorage.setItem("playerTwoScore", state.playerTwoScore.toString());
    },

    updateTimer(state) {
      if (state.timer === 0) {
        state.winner =
          state.currentPlayer === "playerOne" ? "playerTwo" : "playerOne";
      } else if (state.timer > 0) {
        state.timer--;
      }
    },
    startGame(state) {
      state.gameBoard = initialGameBoard;

      state.currentPlayer =
        state.currentPlayer === "playerOne" ? "playerOne" : "playerTwo";
      state.winner = null;
      state.timer = 30;
      state.winningTiles = [];
      state.isMenuOpen = false;
    },
    dropBall(state, action) {
      const { column, currentPlayer } = action.payload;

      for (let row = 5; row >= 0; row--) {
        if (!state.gameBoard[row][column]) {
          state.gameBoard[row][column] = state.gameBoard[row][column] =
            currentPlayer === "playerOne"
              ? "counter-red-large"
              : "counter-yellow-large";
          break;
        }
      }
    },
    switchPlayer(state) {
      state.currentPlayer =
        state.currentPlayer === "playerOne" ? "playerTwo" : "playerOne";
      state.timer = 30;
    },

    checkForWin(state) {
      const { gameBoard, currentPlayer } = state;
      let winningCombination = null;

      const checkDirection = (startRow, startCol, rowDelta, colDelta) => {
        const cellValue =
          currentPlayer === "playerOne"
            ? "counter-red-large"
            : "counter-yellow-large";

        for (let i = 0; i < 4; i++) {
          const row = startRow + i * rowDelta;
          const col = startCol + i * colDelta;

          // Check if the cell is out of bounds or has a different value
          if (
            row < 0 ||
            row >= 6 ||
            col < 0 ||
            col >= 7 ||
            gameBoard[row][col] !== cellValue
          ) {
            return false;
          }
        }

        winningCombination = Array.from({ length: 4 }, (_, i) => [
          startRow + i * rowDelta,
          startCol + i * colDelta,
        ]);
        return true;
      };

      // Check for horizontal win
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
          if (checkDirection(row, col, 0, 1)) {
            state.winner = currentPlayer;
            break;
          }
        }
      }

      // Check for vertical win
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 7; col++) {
          if (checkDirection(row, col, 1, 0)) {
            state.winner = currentPlayer;
            break;
          }
        }
      }

      // Check for diagonal win (top-left to bottom-right)
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
          if (checkDirection(row, col, 1, 1)) {
            state.winner = currentPlayer;
            break;
          }
        }
      }

      // Check for diagonal win (bottom-left to top-right)
      for (let row = 3; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
          if (checkDirection(row, col, -1, 1)) {
            state.winner = currentPlayer;
            break;
          }
        }
      }

      // Check for a tie
      const isTie = gameBoard.every((row) =>
        row.every((cell) => cell !== null),
      );
      if (isTie) {
        state.winner = "tie";
      }

      // Set the winning tiles
      if (state.winner && winningCombination) {
        state.winningTiles = winningCombination;
      }
    },

    toggleMenu(state, action) {
      state.isMenuOpen = action.payload;
    },
    resetGame(state) {
      state.playerOneScore = 0;
      state.playerTwoScore = 0;
      state.currentPlayer = "playerOne";
      state.winner = null;
      state.timer = 30;
      state.gameBoard = initialGameBoard;
      state.winningTiles = [];
      state.isMenuOpen = false;
    },
  },
});

export default playerSlice.reducer;

export const {
  updatePlayerOneScore,
  updatePlayerTwoScore,
  updateTimer,
  dropBall,
  switchPlayer,
  checkForWin,
  startGame,
  toggleMenu,
  resetGame,
} = playerSlice.actions;
