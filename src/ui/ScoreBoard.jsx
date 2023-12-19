import { motion } from "framer-motion";

function ScoreBoard({ img, score, player, from }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: from === "left" ? -100 : 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={` flex w-[14rem] flex-col items-center rounded-[2rem] border-[3px] border-black bg-white font-bold text-black shadow-black-sh desktop:w-[27.2rem] desktop:justify-between desktop:px-8 mobile:w-auto mobile:px-4 ${
        player === "Player 1" || player === "You"
          ? "desktop:flex-row"
          : "desktop:flex-row-reverse"
      }`}
    >
      <img
        src={img}
        alt="player"
        className={`-mt-12 mb-6 desktop:mb-0 desktop:mt-0 ${
          player === "Player 1" || player === "You"
            ? "desktop:-ml-16"
            : "desktop:-mr-16"
        }`}
      />
      <div className="flex flex-col items-center desktop:w-full desktop:justify-between desktop:px-8 tablet:flex-row mobile:flex-col mobile:px-4">
        <p className="mobileSmall:text-[1.4rem] text-[2rem] uppercase mobile:text-[1.6rem]">
          {player}
        </p>
        <motion.p
          className="text-[5.6rem] mobile:text-[3.2rem]"
          key={score}
          animate={{ scale: [1, 1.5, 1] }}
        >
          {score}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ScoreBoard;
