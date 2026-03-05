import { tournamentData } from "./data/tournmentDB";
import TournmentCard from "./components/TournamenteCard";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <TournmentCard tournamentData={tournamentData} />
    </div>
  );
}

export default App;