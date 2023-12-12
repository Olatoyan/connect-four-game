import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./player/PlayerSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
