function InscrireButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 text-white px-4 py-2 rounded"
    >
      Inscrire
    </button>
  );
}

export default InscrireButton;