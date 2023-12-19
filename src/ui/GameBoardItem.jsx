import { AnimatePresence, motion } from "framer-motion";

function GameBoardItem({ rowIndex, cell, isWinner }) {
  const windowWidth = window.innerWidth <= 700;
  const initialY = windowWidth ? 31 * -(rowIndex + 1) : 58.4 * -(rowIndex + 1);

  return (
    <motion.div
      className="absolute inset-0 h-[7.5rem] w-[7rem] tablet:inset-auto tablet:h-[3.8rem] tablet:w-[3.8rem] mobile:top-[44%] mobile:flex mobile:items-center mobile:justify-center"
      initial={{ y: initialY }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    >
      <div className="z-2 relative mobile:absolute mobile:top-[-14%]">
        <img
          src={`./${cell}.svg`}
          alt={`player-${cell}`}
          className="mobile:h-[4.07rem]"
        />
        <AnimatePresence>
          {isWinner && (
            <motion.p
              initial={{
                scale: 0,
                opacity: 0,

                transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] font-bold text-white mobile:text-[2rem]`}
            >
              O
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default GameBoardItem;
