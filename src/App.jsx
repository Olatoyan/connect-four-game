import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PlayerPage from "./pages/PlayerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="player" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
