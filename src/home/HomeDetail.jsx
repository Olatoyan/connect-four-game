import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

function HomeDetail() {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-full max-w-[50rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-28 rounded-[4rem] border-[3px] border-black bg-purple px-16 py-28 shadow-black-sh">
      <Logo />

      <div className="flex w-full flex-col gap-12 text-[2.4rem] font-bold uppercase">
        <Link
          className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-yellow p-8 shadow-black-sh transition-all duration-300 hover:shadow-purple-sh"
          to="player"
        >
          <p>Play vs player</p>
          <img src="./player-vs-player.svg" alt="player vs player icon" />
        </Link>

        <Link to="rules">
          <p className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-white p-8 shadow-black-sh transition-all duration-300 hover:shadow-purple-sh">
            Game Rules
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomeDetail;
