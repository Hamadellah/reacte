import { useNavigate } from "react-router-dom";
import getBadgeStatus from "./Statusbadge";
import { useState } from "react";

const TournmentCard = ({ tournamentData }) => {
  const navigate = useNavigate();
  const [ showform , setShowform ]= useState(false);

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mt-[3%] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournamentData.map((t) => (
          <div
            key={t.id}
            onClick={() => navigate(`/tournament/${t.id}`)}
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

            {/* Button */}
               <button
        onClick={() => setShowform(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded mt-3"
      >
        Inscrire
      </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournmentCard;