export default function SimulateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-2xl shadow-lg shadow-purple-500/30 transition"
    >
      Simulate Access
    </button>
  );
}
