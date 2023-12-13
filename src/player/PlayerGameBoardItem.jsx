import { motion } from "framer-motion";

function PlayerGameBoardItem({ rowIndex, cell, isWinner }) {
  return (
    <motion.div
      className="tablet:h-[3.3924rem] tablet:w-[3.3973rem] tablet:inset-auto mobile:top-1/2 mobile:flex mobile:items-center mobile:justify-center absolute inset-0 z-20 h-[7.5rem] w-[7rem]"
      initial={{ y: 58.4 * -(rowIndex + 1) }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    >
      <div className="mobile:absolute mobile:top-[-14%] relative">
        <img src={`./${cell}.svg`} alt={`player-${cell}`} className="" />
        {isWinner && (
          <p
            className={`mobile:text-[2rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] font-bold text-white`}
          >
            O
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default PlayerGameBoardItem;
