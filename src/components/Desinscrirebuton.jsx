function Desa({ tournamentId, participantId, removeParticipant }) {
  return (
    <div className="flex justify-end items-end">
      <button
        onClick={() => removeParticipant(tournamentId, participantId)}
        className="bg-red-500 h-[40px] hover:bg-red-600 text-white rounded transition-colors duration-200 px-3"
      >
        Désinscrire
      </button>
    </div>
  );
}

export default Desa;