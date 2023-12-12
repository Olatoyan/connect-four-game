import Logo from "../ui/Logo";

function HomeDetail() {
  return (
    <div className="bg-purple shadow-black-sh absolute left-1/2 top-1/2 flex w-full max-w-[50rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-28 rounded-[4rem] border-[3px] border-black px-16 py-28">
      <Logo />

      <div className="flex w-full flex-col gap-12 text-[2.4rem] font-bold uppercase">
        <div className="bg-yellow shadow-black-sh flex items-center justify-between rounded-[2rem] border-[3px] border-black p-8">
          <p>Play vs player</p>
          <img src="./player-vs-player.svg" alt="player vs player icon" />
        </div>

        <div>
          <p className="shadow-black-sh flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-white p-8">
            Game Rules
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeDetail;
