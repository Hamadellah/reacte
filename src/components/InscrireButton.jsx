// components/InscrireButton.jsx
function InscrireButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 text-white px-4 py-2 rounded mt-3"
    >
      Inscrire
    </button>
  );
}

export default InscrireButton;