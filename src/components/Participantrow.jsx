function TournamentDetails({ tournament }) {

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        {tournament.title}
      </h1>

      <p className="mt-4">
        {tournament.description}
      </p>

      <p className="mt-2">
        Participants: {tournament.participantsCount}
      </p>

      <p className="mt-2">
        Date: {tournament.date}
      </p>

    </div>
  );
}

export default TournamentDetails;