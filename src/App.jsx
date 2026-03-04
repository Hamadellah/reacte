import { tournamentData } from "./data/tournmentDB";
import TournmentCard from "./components/TournamenteCard";

function App() {
  return (
    <div>
      <TournmentCard tournamentData={tournamentData} />
    </div>
  );
}

export default App;