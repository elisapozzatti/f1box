import Homepage from "./pages/Homepage";
import Lineup from "./pages/Lineup";
import Team from "./pages/Team";
import Circuits from "./pages/Circuits";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/team" element={<Team />} />
        <Route path="/circuits" element={<Circuits />} />
      </Routes>
    </>
  );
}

export default App;
