import { useParams, useNavigate } from "react-router-dom";
import getBadgeStatus from "./Statusbadge";
import Forme from "./form";

function TournamentDetails({ tournamentData , addParticipant }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const tournament = tournamentData.find((t) => t.id === id);

  if (!tournament) {
    return <p className="p-10 text-center text-red-500 font-semibold">Tournament not found</p>;
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-shadow shadow-md"
      >
        ← Back
      </button>

      {/* Tournament Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{tournament.title}</h1>

      {/* Tournament Status */}
      <span
        className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold mb-6 inline-block ${getBadgeStatus(
          tournament.status
        )}`}
      >
        {tournament.status}
      </span>

      {/* Participants Header */}
      <h2 className="text-2xl font-bold mb-4">
        Participants ({tournament.participants.length})
      </h2>

      {/* Participants Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tournament.participants.map((p) => (
          <div
            key={p.id}
            className={`flex items-center gap-4 p-4 rounded-2xl shadow-md transition-transform transform hover:scale-105
              ${p.status === "Confirmed" ? "bg-green-50" : "bg-orange-50"}`}
          >
            <img
              src={p.avatar}
              alt={p.name}
              className="w-14 h-14 rounded-full border-2 border-purple-300"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <span
                className={`mt-1 inline-block px-3 py-1 rounded-full text-sm font-medium
                  ${p.status === "Confirmed" ? "bg-green-200 text-green-800" : "bg-orange-200 text-orange-800"}`}
              >
                {p.status}
              </span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default TournamentDetails;