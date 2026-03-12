import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import { tournamentData } from "./data/tournmentDB";
import Header from "./components/Header";
import TournmentCard from "./components/TournamenteCard";
import TournamentDetails from "./components/TournamentDetails";
import Homepage from "./pages/Homepages";
import TabsySrem from "./components/tabsysrem";

function App() {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [tournaments , settournaments] = useState(tournamentData)

const addParticipant = (tournamentId, newParticipant) => {

    settournaments(tournaments.map(t => {
      if (t.id === tournamentId) {
        return {
          ...t,
          participants: [...t.participants, newParticipant]
        }
      }
      return t
    }))
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage addParticipant={addParticipant} />} />

        <Route
          path="/tournament/:id"
          element={
            <>
            <TabsySrem/>
          <TournamentDetails tournamentData={tournaments} addParticipant={addParticipant} />
          </>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
