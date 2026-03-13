import Header from "../components/Header";
import TournamentCard from "../components/TournamenteCard";
import TournmentCard from "../components/TournamenteCard";
import { tournamentData } from "../data/tournmentDB";
function Homepage({addParticipant}) {
  return (
    <>
      <Header />
            <TournamentCard
        tournamentData={tournamentData}
        addParticipant={addParticipant}
      />
    </>
  );
}
export default Homepage;
