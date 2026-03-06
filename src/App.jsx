import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer"
import { tournamentData } from "./data/tournmentDB";
import Header from "./components/Header";
import TournmentCard from "./components/TournamenteCard";
import TournamentDetails from "./components/TournamentDetails";

function App() {
  const [selectedTournament, setSelectedTournament] = useState(null);
  return (
  <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<TournmentCard tournamentData={tournamentData} />}
        />

                <Route
          path="/tournament/:id"
          element={<TournamentDetails tournamentData={tournamentData} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;