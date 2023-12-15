import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PlayerPage from "./pages/PlayerPage";
import ComputerPage from "./pages/ComputerPage";
import RulesPage from "./pages/RulesPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="player" element={<PlayerPage />} />
        <Route path="cpu" element={<ComputerPage />} />
        <Route path="rules" element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
