// components/InscrireButton.jsx
function InscrireButton({ onClick }) {
  return (
    <>
    <button
      onClick={onClick}
      className="bg-purple-600 text-white px-4 py-2 rounded mt-3"
    >
      Inscrire
    </button>
     <button
      className="bg-red-600 text-white px-4 py-2 rounded mt-3"
    >
     desinscrire
    </button>
    </>
  );
}

export default InscrireButton;