import { useNavigate } from "react-router-dom";
import getBadgeStatus from "./Statusbadge";
import { useState } from "react";
import Form from "./form";
import InscrireButton from "./Inscrirebutton";
import Desa from "./Desinscrirebuton";

const TournamentCard = ({ tournamentData, addParticipant }) => {
  const navigate = useNavigate();
  const [activeFormId, setActiveFormId] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mt-[3%] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournamentData.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {t.title}
            </h2>

            {/* Status */}
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block ${getBadgeStatus(
                t.status
              )}`}
            >
              {t.status}
            </span>

            {/* Description */}
            <p className="text-slate-600 mb-4">{t.description}</p>

            {/* Participants */}
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Participants:</span>{" "}
              {t.participantsCount} • {t.visibility}
            </p>

            {/* Format */}
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Format:</span> {t.format}
            </p>

            {/* Date */}
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Date:</span> {t.date}
            </p>

            {/* Location */}
            <p className="text-slate-600 mb-4">
              <span className="font-medium">Location:</span> {t.location}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-3">

              {/* Details */}
              <button
                onClick={() => navigate(`/tournament/${t.id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                participante
              </button>

              {/* Inscrire */}
            <InscrireButton onClick={()=>setActiveFormId(t.id)}/>
              {/* desa */}
              <Desa/>

            </div>

            {/* Form */}
            {activeFormId === t.id && (
              <Form addParticipant={addParticipant} tournamentId = {t.id} onClose={() => setActiveFormId(null)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentCard;