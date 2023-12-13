// import { useSelector } from "react-redux";
import MenuBox from "./MenuBox";
import PlayerBoardHeader from "./PlayerBoardHeader";
import PlayerGameBoardBox from "./PlayerGameBoardBox";
import ScoreBackground from "./ScoreBackground";

function PlayerBoard() {
  // const { isMenuOpen } = useSelector((store) => store.player);
  return (
    <section className=" relative flex w-screen flex-col items-center justify-center">
      <PlayerBoardHeader />
      <PlayerGameBoardBox />
      <ScoreBackground />
      {/* {isMenuOpen && <MenuBox />} */}
      <MenuBox />
    </section>
  );
}

export default PlayerBoard;
