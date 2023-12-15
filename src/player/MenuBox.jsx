import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGame, toggleMenu } from "./PlayerSlice";
import { AnimatePresence, motion } from "framer-motion";

function MenuBox() {
  const { isMenuOpen } = useSelector((store) => store.player);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCloseMenu() {
    dispatch(toggleMenu(false));
  }

  function handleRestart() {
    dispatch(startGame());
  }

  function quitGame() {
    dispatch(toggleMenu(false));
    navigate("/");
  }

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div className="absolute inset-0 z-[30] flex min-h-screen w-full items-center justify-center mobile:px-6">
          <motion.div
            className="z-[30] w-full max-w-[50rem] rounded-[4rem] border-[3px] border-black bg-purple px-16 py-20 font-bold shadow-black-sh"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h2 className="pb-[4.4rem] text-center text-[5.6rem] uppercase text-white mobile:text-[3.2rem]">
              Pause
            </h2>
            <div className="flex flex-col gap-12">
              <button
                className="rounded-[2rem] border-[3px] border-black bg-white p-8 text-[2.4rem] font-bold uppercase shadow-black-sh transition-all duration-300 hover:shadow-purple-sh mobile:p-6 mobile:text-[1.8rem]"
                onClick={handleCloseMenu}
              >
                Continue Game
              </button>
              <button
                className="rounded-[2rem] border-[3px] border-black bg-white p-8 text-[2.4rem] font-bold uppercase shadow-black-sh transition-all duration-300 hover:shadow-purple-sh mobile:p-6 mobile:text-[1.8rem]"
                onClick={handleRestart}
              >
                Restart
              </button>
              <button
                className="rounded-[2rem] border-[3px] border-black bg-red p-8 text-[2.4rem] font-bold uppercase shadow-black-sh transition-all duration-300 hover:shadow-purple-sh mobile:p-6 mobile:text-[1.8rem]"
                onClick={quitGame}
              >
                Quit Game
              </button>
            </div>
          </motion.div>
          <motion.div
            className="absolute inset-0 z-[22] h-full w-full bg-black bg-opacity-50"
            onClick={handleCloseMenu}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{
              opacity: 0,
              scaleY: 0,
              transition: { duration: 0.3, delay: 0.6 },
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuBox;
