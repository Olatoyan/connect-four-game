import { motion } from "framer-motion";

function PlayerScoreBoard({ img, score, player }) {
  return (
    <div
      className={` desktop:w-[27.2rem] mobile:w-auto desktop:justify-between desktop:px-8 mobile:px-4 flex w-[14rem] flex-col items-center rounded-[2rem] border-[3px] border-black bg-white font-bold text-black shadow-black-sh ${
        player === "Player 1" ? "desktop:flex-row" : "desktop:flex-row-reverse"
      }`}
    >
      <img
        src={img}
        alt="player"
        className={`desktop:mt-0 desktop:mb-0 -mt-12 mb-6 ${
          player === "Player 1" ? "desktop:-ml-20" : "desktop:-mr-20"
        }`}
      />
      <div className="desktop:px-8 mobile:px-4 desktop:justify-between desktop:w-full tablet:flex-row mobile:flex-col flex flex-col items-center">
        <p className="mobile:text-[1.4rem] text-[2rem] uppercase">{player}</p>
        <motion.p
          className="mobile:text-[3.2rem] text-[5.6rem]"
          key={score}
          animate={{ scale: [1, 1.5, 1] }}
        >
          {score}
        </motion.p>
      </div>
    </div>
  );
}

export default PlayerScoreBoard;
