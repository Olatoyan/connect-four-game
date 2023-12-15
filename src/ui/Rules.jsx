import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center mobile:px-4"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative max-w-[50rem] space-y-12 rounded-[4rem] border-[3px] border-black bg-white p-12 shadow-black-sh">
        <h2 className=" text-center text-[5.6rem] font-bold uppercase">
          Rules
        </h2>

        <div className="space-y-6">
          <h3 className="text-[2rem] font-bold uppercase text-purple">
            Objective
          </h3>
          <p className="text-[1.6rem] font-medium opacity-[0.6611]">
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
        </div>

        <div className="space-y-6 pb-10">
          <h3 className="text-[2rem] font-bold uppercase text-purple">
            How to play
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-6 text-[1.6rem] font-bold">
              <h4>1</h4>
              <p className="font-medium">Red goes first in the first game.</p>
            </div>
            <div className="flex items-start gap-6 text-[1.6rem] font-bold">
              <h4>2</h4>
              <p className="font-medium">
                Players must alternate turns, and only one disc can be dropped
                in each turn.
              </p>
            </div>
            <div className="flex items-start gap-6 text-[1.6rem] font-bold">
              <h4>3</h4>
              <p className="font-medium">
                The game ends when there is a 4-in-a-row or a stalemate.
              </p>
            </div>
            <div className="flex items-start gap-6 text-[1.6rem] font-bold">
              <h4>4</h4>
              <p className="font-medium">
                The starter of the previous game goes second on the next game.
              </p>
            </div>
          </div>
        </div>

        <Link
          className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2"
          to="/"
        >
          <img src="./icon-check.svg" alt="check icon" />
        </Link>
      </div>
    </motion.section>
  );
}

export default Rules;
