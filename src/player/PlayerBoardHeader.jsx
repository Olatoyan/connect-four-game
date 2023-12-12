import Button from "../ui/Button";
import Logo from "../ui/Logo";

function PlayerBoardHeader() {
  return (
    <header className="mb-24 flex w-[40%] items-center justify-between">
      <Button>Menu</Button>
      <Logo />
      <Button>Restart</Button>
    </header>
  );
}

export default PlayerBoardHeader;
