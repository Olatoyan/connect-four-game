import MenuBox from "./MenuBox";
import PlayerBoardHeader from "./PlayerBoardHeader";
import PlayerGameBoardBox from "./PlayerGameBoardBox";
import ScoreBackground from "./ScoreBackground";

function PlayerBoard() {
  return (
    <section className=" relative flex w-screen flex-col items-center justify-center">
      <PlayerBoardHeader />
      <PlayerGameBoardBox />
      <ScoreBackground />
      <MenuBox />
    </section>
  );
}

export default PlayerBoard;
