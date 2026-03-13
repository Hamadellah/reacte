// components/RegisterParticipant.jsx
import React, { useState } from "react";

function RegisterParticipant({ tournament, onUpdate, onClose, addParticipant, tournamentId }) {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    picture: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const newParticipant = {
    id: Date.now(),
    name: formData.name,
    state: formData.state,
    avatar: formData.picture,
    status: "Pending"
  };

  addParticipant(newParticipant); // غير participant

  onClose();
};

  return (
    <div className="mt-4 bg-gray-100 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-3">Register for  </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="Your state"
          className="border p-2 rounded"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="picture"
          placeholder="Picture URL"
          className="border p-2 rounded"
          value={formData.picture}
          onChange={handleChange}
          required
        />

        <div className="flex gap-2 mt-2">
          <button type="submit" className="bg-green-600 text-white p-2 rounded">
            Confirm
          </button>
          <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterParticipant;