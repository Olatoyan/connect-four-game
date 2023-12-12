import PlayerBoardHeader from "./PlayerBoardHeader";
import PlayerGameBoardBox from "./PlayerGameBoardBox";
import ScoreBackground from "./ScoreBackground";

function PlayerBoard() {
  return (
    <section className="flex w-screen flex-col items-center justify-center">
      <PlayerBoardHeader />
      <PlayerGameBoardBox />
      <ScoreBackground />
    </section>
  );
}

export default PlayerBoard;
