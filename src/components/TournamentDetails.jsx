import { useParams } from "react-router-dom";

function TournamentDetails() {

  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Tournament Details
      </h1>

      <p className="mt-4">
        Tournament ID: {id}
      </p>
    </div>
  );
}

export default TournamentDetails;