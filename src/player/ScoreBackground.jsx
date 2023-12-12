import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import { startGame } from "../player/PlayerSlice";

function ScoreBackground() {
  const { currentPlayer, timer, winner } = useSelector((store) => store.player);
  const dispatch = useDispatch();

  function handleRestartGame() {
    dispatch(startGame());
  }

  const currentMove =
    currentPlayer === "playerOne"
      ? "./turn-background-red.svg"
      : "./turn-background-yellow.svg";

  const playerTurn =
    currentPlayer === "playerOne" ? "Player 1's" : "Player 2's";

  const finalWinner = winner === "playerOne" ? "Player 1" : "Player 2";

  return (
    <div
      className={`-mt-16 flex w-full justify-center rounded-[6rem_6rem_0_0] ${
        !winner
          ? "bg-dark-purple"
          : winner === "playerOne"
            ? "bg-red"
            : "bg-yellow"
      }`}
    >
      {!winner && (
        <div className="relative z-[99]">
          <img src={currentMove} alt="current player turn" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[1.6rem] font-bold uppercase">
              {playerTurn} Turn
            </p>
            <p className="text-[5.6rem] font-bold">
              {timer}
              <span>s</span>
            </p>
          </div>
        </div>
      )}

      {winner && (
        <div className="relative z-[99]">
          <div className="flex w-[28.5rem] flex-col items-center rounded-[2rem] border-[3px] border-black bg-white py-7 font-bold uppercase shadow-black-sh">
            <p className="text-[1.6rem]">{finalWinner} </p>
            <p className="text-[5.6rem]">wins</p>
            <Button onClick={handleRestartGame}>Play Again</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScoreBackground;
