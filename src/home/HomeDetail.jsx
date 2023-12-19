import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { motion } from "framer-motion";

function HomeDetail() {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div className="left-1/2 top-1/2 flex w-full max-w-[50rem] flex-col items-center gap-28 rounded-[4rem] border-[3px] border-black bg-purple px-16 py-28 shadow-black-sh mobile:border-none mobile:px-8 mobile:shadow-none">
        <Logo />

        <div className="mobileSmall:text-[1.8rem] flex w-full flex-col gap-12 text-[2.4rem] font-bold uppercase">
          <Link
            className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-red p-8 shadow-black-sh transition-all duration-300 hover:shadow-purple-sh"
            to="cpu"
          >
            <p>Play vs cpu</p>
            <img
              src="./player-vs-cpu.svg"
              alt="player vs cpu icon"
              className="w-[5rem]"
            />
          </Link>
          <Link
            className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-yellow p-8 shadow-black-sh transition-all duration-300 hover:shadow-purple-sh"
            to="player"
          >
            <p>Play vs player</p>
            <img
              src="./player-vs-player.svg"
              alt="player vs player icon"
              className="w-[5rem]"
            />
          </Link>

          <Link to="rules">
            <p className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-white p-8 shadow-black-sh transition-all duration-300 hover:shadow-purple-sh">
              Game Rules
            </p>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HomeDetail;
