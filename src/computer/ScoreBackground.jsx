import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../computer/ComputerSlice";
import { motion } from "framer-motion";
import Button from "../ui/Button";

function ScoreBackground() {
  const { currentPlayer, timer, winner } = useSelector(
    (store) => store.computer,
  );
  const dispatch = useDispatch();

  function handleRestartGame() {
    dispatch(startGame());
  }

  const currentMove =
    currentPlayer === "player"
      ? "./turn-background-red.svg"
      : "./turn-background-yellow.svg";

  const playerTurn = currentPlayer === "player" ? "Your" : "Cpu's";

  const finalWinner =
    winner === "player" ? "You" : winner === "tie" ? "It's a tie" : "CPU";

  return (
    <motion.div
      className={` flex h-[23.4rem] w-full justify-center rounded-[6rem_6rem_0_0]  ${
        !winner
          ? "bg-dark-purple"
          : winner === "player"
            ? "bg-red"
            : winner === "tie"
              ? "bg-dark-purple"
              : "bg-yellow"
      }`}
    >
      {!winner && (
        <motion.div
          key="playerTurn"
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-[21] -mt-16 mobile:-mt-8"
        >
          <img src={currentMove} alt="current player turn" />
          <div className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="mobileSmall:text-[1.4rem] text-[1.6rem] font-bold uppercase">
              {playerTurn} Turn
            </p>
            <p className="text-[5.6rem] font-bold">
              {timer}
              <span>s</span>
            </p>
          </div>
        </motion.div>
      )}
      {winner && (
        <motion.div
          key="winnerBox"
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-[21] -mt-16 mobile:-mt-8"
        >
          <div
            className={`flex w-[28.5rem] flex-col items-center rounded-[2rem] border-[3px] border-black bg-white py-7 font-bold uppercase shadow-black-sh ${
              winner === "tie" ? "gap-6" : ""
            }`}
          >
            <p
              className={`${
                winner === "tie" ? "text-[4rem]" : "text-[1.6rem]"
              }`}
            >
              {finalWinner}{" "}
            </p>
            {winner !== "tie" && (
              <p className="text-[5.6rem]">
                {winner === "player" ? "win" : "wins"}
              </p>
            )}
            <Button onClick={handleRestartGame}>Play Again</Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ScoreBackground;
