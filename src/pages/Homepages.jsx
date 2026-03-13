import Header from "../components/Header";
import TournmentCard from "../components/TournamenteCard";
import { tournamentData } from "../data/tournmentDB";
function Homepage({addParticipant}) {
  return (
    <>
      <Header />
      <TournmentCard tournamentData={tournamentData} addParticipant={addParticipant} />
    </>
  );
}
export default Homepage;
