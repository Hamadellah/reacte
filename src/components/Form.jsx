// Form.jsx
import React from "react";

function Form({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    onClose();
  };

  return (
    <div className="mt-4 bg-gray-100 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-3">
        Tournament Registration
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          className="border p-2 rounded"
          required
        />

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
      </form>
    </div>
  );
}

export default Form;