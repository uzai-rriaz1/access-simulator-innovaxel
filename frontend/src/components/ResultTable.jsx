export default function ResultTable({ results }) {
  if (!results.length) return null;

  return (
    <div className="overflow-x-auto mt-6 shadow-lg rounded-2xl border border-pink-500/30">
      <h2 className="text-xl font-bold mb-2 text-pink-400">
        Simulation Results
      </h2>
      <table className="table-auto w-full text-left text-gray-300">
        <thead className="bg-pink-600 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Room</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Reason</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, index) => (
            <tr key={index} className="hover:bg-pink-900/40 transition">
              <td className="px-4 py-2">{res.id}</td>
              <td className="px-4 py-2">{res.room}</td>
              <td
                className={`px-4 py-2 font-bold ${
                  res.status === "Granted" ? "text-green-400" : "text-red-400"
                }`}
              >
                {res.status}
              </td>
              <td className="px-4 py-2">{res.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
