import { useSelector } from "react-redux";
import PlayerGameBoard from "./PlayerGameBoard";
import PlayerScoreBoard from "./PlayerScoreBoard";

function PlayerGameBoardBox() {
  const { playerOneScore, playerTwoScore } = useSelector(
    (store) => store.player,
  );
  return (
    <div
      className="grid max-w-[103rem] grid-cols-[auto_1fr_auto] items-center gap-24 desktop:grid-cols-2 desktop:gap-x-8 desktop:gap-y-12 mobile:w-full mobile:px-16
    "
    >
      <PlayerScoreBoard
        img="./player-one.svg"
        score={playerOneScore}
        player="Player 1"
      />
      <PlayerGameBoard />
      <PlayerScoreBoard
        img="./player-two.svg"
        score={playerTwoScore}
        player="Player 2"
      />
    </div>
  );
}

export default PlayerGameBoardBox;
