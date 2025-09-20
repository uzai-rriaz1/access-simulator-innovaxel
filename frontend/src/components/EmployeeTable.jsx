export default function EmployeeTable({ employees }) {
  return (
    <div className="overflow-x-auto shadow-lg rounded-2xl border border-purple-500/30">
      <table className="table-auto w-full text-left text-gray-300">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Access Level</th>
            <th className="px-4 py-2">Request Time</th>
            <th className="px-4 py-2">Room</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i} className="hover:bg-purple-900/40 transition">
              <td className="px-4 py-2">{emp.id}</td>
              <td className="px-4 py-2">{emp.access_level}</td>
              <td className="px-4 py-2">{emp.request_time}</td>
              <td className="px-4 py-2">{emp.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
