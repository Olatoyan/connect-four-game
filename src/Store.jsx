import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./player/PlayerSlice";
import ComputerReducer from "./computer/ComputerSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    computer: ComputerReducer,
  },
});

export default store;
