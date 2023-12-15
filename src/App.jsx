import { Route, Routes, useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PlayerPage from "./pages/PlayerPage";
import ComputerPage from "./pages/ComputerPage";
import RulesPage from "./pages/RulesPage";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="player" element={<PlayerPage />} />
        <Route path="cpu" element={<ComputerPage />} />
        <Route path="rules" element={<RulesPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
