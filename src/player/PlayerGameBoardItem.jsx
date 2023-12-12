import { motion } from "framer-motion";

function PlayerGameBoardItem({ rowIndex, cell }) {
  return (
    <motion.div
      className="absolute inset-0 h-[7.5rem] w-[7rem]"
      initial={{ y: 58.4 * -(rowIndex + 1) }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    >
      <img src={`./${cell}.svg`} alt={`player-${cell}`} className="" />
    </motion.div>
  );
}

export default PlayerGameBoardItem;
