import { tournamentData } from "./data/tournmentDB";
import TournmentCard from "./components/TournamenteCard";
import Header from "./components/Header";
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <Header/>
      <TournmentCard tournamentData={tournamentData} />
      <Footer/>
    </div>
  );
}

export default App;