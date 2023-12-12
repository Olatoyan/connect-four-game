import { motion } from "framer-motion";

function PlayerScoreBoard({ img, score, player }) {
  return (
    <div className="flex w-[14rem] flex-col items-center rounded-[2rem] border-[3px] border-black bg-white font-bold text-black shadow-black-sh">
      <img src={img} alt="player" className="-mt-12 mb-6" />
      <p className="text-[2rem] uppercase">{player}</p>
      <motion.p
        className="text-[5.6rem]"
        key={score}
        animate={{ scale: [1, 1.5, 1] }}
      >
        {score}
      </motion.p>
    </div>
  );
}

export default PlayerScoreBoard;
