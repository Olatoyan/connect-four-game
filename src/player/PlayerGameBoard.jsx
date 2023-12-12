import { useDispatch, useSelector } from "react-redux";
import {
  dropBall,
  switchPlayer,
  checkForWin,
  updatePlayerOneScore,
  updatePlayerTwoScore,
  updateTimer,
} from "../player/PlayerSlice";

import PlayerGameBoardItem from "./PlayerGameBoardItem";
import { useEffect } from "react";
function PlayerGameBoard() {
  const { currentPlayer, gameBoard, winner } = useSelector(
    (store) => store.player,
  );
  const dispatch = useDispatch();

  function handleColumnClick(column) {
    if (!winner) {
      dispatch(dropBall({ column, currentPlayer }));
      dispatch(checkForWin());
      dispatch(switchPlayer());
    }
  }

  useEffect(() => {
    if (winner === "playerOne") dispatch(updatePlayerOneScore());
    if (winner === "playerTwo") dispatch(updatePlayerTwoScore());

    let timerInterval;
    if (!winner) {
      timerInterval = setInterval(() => {
        dispatch(updateTimer());
      }, 1000); // Update every second
    }
    return () => clearInterval(timerInterval);
  }, [dispatch, winner]);

  return (
    <div className="relative grid h-[58.4rem] w-[63.2rem] grid-cols-7 grid-rows-6 rounded-[4rem] pb-16 pl-6 pt-6">
      {gameBoard.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <button
            key={`${rowIndex}-${columnIndex}`}
            className="cell rounded-ful relative z-20 h-[6.4rem] w-[6.4rem] cursor-pointer"
            onClick={() => handleColumnClick(columnIndex)}
          >
            {cell && <PlayerGameBoardItem rowIndex={rowIndex} cell={cell} />}
          </button>
        )),
      )}

      <img
        src="./board-layer-white-large.svg"
        alt="white board layer"
        className="absolute inset-0 z-10"
      />
      <img
        src="./board-layer-black-large.svg"
        alt="black board layer"
        className="absolute inset-0"
      />
    </div>
  );
}

export default PlayerGameBoard;
