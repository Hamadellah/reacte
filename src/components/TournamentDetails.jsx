import { useParams, useNavigate } from "react-router-dom";

function TournamentDetails({ tournamentData }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const tournament = tournamentData.find(
    (t) => t.id === id
  );

  if (!tournament) {
    return <p className="p-10">Tournament not found</p>;
  }

  return (
    <div className="p-10">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">
        Participants ({tournament.participants.length})
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        {tournament.participants.map((p) => (

          <div
            key={p.id}
            className={`p-4 rounded-xl flex items-center gap-3
            ${p.status === "Confirmed"
              ? "bg-green-100"
              : "bg-orange-100"}
            `}
          >

            <img
              src={p.avatar}
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold">{p.name}</h3>

              <p
                className={`text-sm
                ${p.status === "Confirmed"
                  ? "text-green-600"
                  : "text-orange-600"}
                `}
              >
                {p.status}
              </p>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TournamentDetails;