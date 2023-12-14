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
    <header className="mb-24 mt-12 flex w-[40%] items-center justify-between desktop:w-[70%] tablet:px-7 mobile:mb-20 mobile:w-full">
      <Button onClick={openMenu}>Menu</Button>
      <Logo />
      <Button onClick={handleRestart}>Restart</Button>
    </header>
  );
}

export default PlayerBoardHeader;
