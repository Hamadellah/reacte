const TournmentCard = ({ tournamentData,onSelect  }) => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mt-[3%] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournamentData.map((t) => (
          <div
            key={t.id}
            onClick={() => onSelect(t)}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {t.title}
            </h2>

            {/* Status */}
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block
                ${
                  t.status === "On Going"
                    ? "bg-green-100 text-green-700"
                    : t.status === "Completed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {t.status}
            </span>

            {/* Description */}
            <p className="text-slate-600 mb-4">{t.description}</p>

            {/* Participants */}
            <p className="text-slate-600 mb-2">
              <span className="font-medium">Participants:</span> {t.participantsCount} • {t.visibility}
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
            <p className="text-slate-600">
              <span className="font-medium">Location:</span> {t.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournmentCard;
