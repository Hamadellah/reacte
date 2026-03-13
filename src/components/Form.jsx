// components/RegisterParticipant.jsx
import React, { useState } from "react";

function RegisterParticipant({ tournament, onClose, addParticipant, tournamentId }) {

  const [formData, setFormData] = useState({
    name: "",
    state: "",
    picture: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newParticipant = {
      id: Date.now(),
      name: formData.name,
      state: formData.state,
      avatar: formData.picture,
      status: "Pending"
    };

    addParticipant(tournamentId, newParticipant);

    onClose();
  };

  return (
    <div className="mt-4 bg-gray-100 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-3">Register for</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Your name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Your state"
          className="border p-2 rounded"
          value={formData.state}
          onChange={(e) =>
            setFormData({ ...formData, state: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Picture URL"
          className="border p-2 rounded"
          value={formData.picture}
          onChange={(e) =>
            setFormData({ ...formData, picture: e.target.value })
          }
          required
        />

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded"
          >
            Confirm
          </button>

          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default RegisterParticipant;