import MenuBox from "./MenuBox";
import ComputerBoardHeader from "./ComputerBoardHeader";
import ComputerGameBoardBox from "./ComputerGameBoardBox";
import ScoreBackground from "./ScoreBackground";

function ComputerBoard() {
  return (
    <section className=" relative flex w-screen flex-col items-center justify-center">
      <ComputerBoardHeader />
      <ComputerGameBoardBox />
      <ScoreBackground />
      <MenuBox />
    </section>
  );
}

export default ComputerBoard;
