import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PlayerPage from "./pages/PlayerPage";
import RulesPage from "./pages/RulesPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="player" element={<PlayerPage />} />
        <Route path="rules" element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
