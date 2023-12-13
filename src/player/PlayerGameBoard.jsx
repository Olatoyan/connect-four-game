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
import { useEffect, useState } from "react";
function PlayerGameBoard() {
  const { currentPlayer, gameBoard, winner, winningTiles, isMenuOpen } =
    useSelector((store) => store.player);
  const dispatch = useDispatch();

  const [isWinnerUpdated, setIsWinnerUpdated] = useState(false);

  function handleColumnClick(column) {
    if (!winner) {
      if (gameBoard[0][column]) {
        return;
      }

      dispatch(dropBall({ column, currentPlayer }));
      dispatch(checkForWin());
      dispatch(switchPlayer());
    }
  }

  useEffect(() => {
    if (!isMenuOpen && !isWinnerUpdated) {
      if (winner === "playerOne") {
        dispatch(updatePlayerOneScore());
        setIsWinnerUpdated(true);
      }
      if (winner === "playerTwo") {
        dispatch(updatePlayerTwoScore());

        setIsWinnerUpdated(true);
      }
    }

    if (!winner) setIsWinnerUpdated(false);
  }, [dispatch, winner, isMenuOpen, isWinnerUpdated]);

  useEffect(() => {
    let timerInterval;
    if (!winner && !isMenuOpen) {
      timerInterval = setInterval(() => {
        dispatch(updateTimer());
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [dispatch, winner, isMenuOpen]);

  const windowWidth = window.innerWidth <= 700;
  const whiteBoardLayer = windowWidth
    ? "./board-layer-white-small.svg"
    : "./board-layer-white-large.svg";
  const blackBoardLayer = windowWidth
    ? "./board-layer-black-small.svg"
    : "./board-layer-black-large.svg";

  return (
    <div className="desktop:col-span-full desktop:row-start-2 tablet:w-[33.5rem] tablet:h-[28rem] mobile:justify-self-center mobile:pb-[0.6rem] mobile:pt-0 mobile:pl-4 relative z-[5] grid h-[58.4rem] w-[63.2rem] grid-cols-7 grid-rows-6 rounded-[4rem] pb-16 pl-6 pt-6">
      {gameBoard.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <button
            key={`${rowIndex}-${columnIndex}`}
            className="cell tablet:h-[3.3973rem] tablet:w-[3.3924rem] relative z-20 h-[6.4rem] w-[6.4rem] cursor-pointer rounded-full "
            onClick={() => handleColumnClick(columnIndex)}
          >
            {cell && (
              <PlayerGameBoardItem
                rowIndex={rowIndex}
                cell={cell}
                isWinner={winningTiles?.some(
                  ([winningRow, winningCol]) =>
                    winningRow === rowIndex && winningCol === columnIndex,
                )}
              />
            )}
          </button>
        )),
      )}

      <img
        src={whiteBoardLayer}
        alt="white board layer"
        className="absolute inset-0 z-10"
      />
      <img
        src={blackBoardLayer}
        alt="black board layer"
        className="absolute inset-0"
      />
    </div>
  );
}

export default PlayerGameBoard;
