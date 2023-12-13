import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { startGame, toggleMenu } from "./PlayerSlice";

function PlayerBoardHeader() {
  const dispatch = useDispatch();

  function openMenu() {
    dispatch(toggleMenu(true));
  }

  function handleRestart() {
    dispatch(startGame());
  }

  return (
    <header className="tablet:px-7 mobile:w-full desktop:w-[70%] mb-24 flex w-[40%] items-center justify-between">
      <Button onClick={openMenu}>Menu</Button>
      <Logo />
      <Button onClick={handleRestart}>Restart</Button>
    </header>
  );
}

export default PlayerBoardHeader;
