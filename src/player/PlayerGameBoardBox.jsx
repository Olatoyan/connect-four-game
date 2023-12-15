import { useSelector } from "react-redux";
import PlayerGameBoard from "./PlayerGameBoard";
import ScoreBoard from "../ui/ScoreBoard";

function PlayerGameBoardBox() {
  const { playerOneScore, playerTwoScore } = useSelector(
    (store) => store.player,
  );
  return (
    <div
      className="grid max-w-[103rem] grid-cols-[auto_1fr_auto] items-center gap-24 desktop:grid-cols-2 desktop:gap-x-8 desktop:gap-y-12 mobile:w-full mobile:px-16
    "
    >
      <ScoreBoard
        img="./player-one.svg"
        score={playerOneScore}
        player="Player 1"
        from="left"
      />

      <PlayerGameBoard />

      <ScoreBoard
        img="./player-two.svg"
        score={playerTwoScore}
        player="Player 2"
        from="right"
      />
    </div>
  );
}

export default PlayerGameBoardBox;
