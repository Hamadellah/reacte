import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import { tournamentData } from "./data/tournmentDB";
import Header from "./components/Header";
import TournmentCard from "./components/TournamenteCard";
function App() {
  return (
    <>
      <Header/>
      <TournmentCard tournamentData={tournamentData} />
      <Footer/>
    </>
  );
}

export default App;