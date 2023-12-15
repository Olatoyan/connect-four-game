import { createSlice } from "@reduxjs/toolkit";

const initialGameBoard = Array.from({ length: 6 }, () => Array(7).fill(null));

const initialState = {
  playerScore: parseInt(localStorage.getItem("playerScore")) || 0,
  computerScore: parseInt(localStorage.getItem("computerScore")) || 0,
  currentPlayer: "player",
  winner: null,
  timer: 30,
  gameBoard: initialGameBoard,
  winningTiles: [],
  isMenuOpen: false,
};

const computerSlice = createSlice({
  name: "computer",
  initialState,
  reducers: {
    updatePlayerScore(state) {
      state.playerScore++;
      localStorage.setItem("playerScore", state.playerScore.toString());
    },
    updateComputerScore(state) {
      state.computerScore++;
      localStorage.setItem("computerScore", state.computerScore.toString());
    },
    updateTimer(state) {
      if (state.timer === 0) {
        state.winner = state.currentPlayer === "player" ? "computer" : "player";
      } else if (state.timer > 0) {
        state.timer--;
      }
    },
    startGame(state) {
      state.gameBoard = initialGameBoard;

      state.currentPlayer =
        state.currentPlayer === "player" ? "player" : "computer";
      state.winner = null;
      state.timer = 30;
      state.winningTiles = [];
      state.isMenuOpen = false;
    },
    dropBall(state, action) {
      const { column, currentPlayer } = action.payload;
      // const isSmallScreen = window.innerWidth <= 700;

      for (let row = 5; row >= 0; row--) {
        if (!state.gameBoard[row][column]) {
          state.gameBoard[row][column] = state.gameBoard[row][column] =
            currentPlayer === "player"
              ? "counter-red-large"
              : "counter-yellow-large";
          break;
        }
      }
    },
    switchPlayer(state) {
      state.currentPlayer =
        state.currentPlayer === "player" ? "computer" : "player";
      state.timer = 30;
    },

    checkForWin(state) {
      const { gameBoard, currentPlayer } = state;
      let winningCombination = null;

      const checkDirection = (startRow, startCol, rowDelta, colDelta) => {
        const cellValue =
          currentPlayer === "player"
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
      state.playerScore = 0;
      state.computerScore = 0;
      state.currentPlayer = "player";
      state.winner = null;
      state.timer = 30;
      state.gameBoard = initialGameBoard;
      state.winningTiles = [];
      state.isMenuOpen = false;
    },
  },
});

export default computerSlice.reducer;

export const {
  updatePlayerScore,
  updateComputerScore,
  updateTimer,
  dropBall,
  switchPlayer,
  checkForWin,
  startGame,
  toggleMenu,
  resetGame,
  makeComputerMove,
} = computerSlice.actions;
