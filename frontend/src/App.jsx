import { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import ResultTable from "./components/ResultTable";
import SimulateButton from "./components/SimulateButton";
import { simulateAccess } from "../utils/api";
import employees from "../../backend/data/employees.json"; // optional fallback

function App() {
  const [results, setResults] = useState([]);

  const handleSimulate = async () => {
    try {
      const res = await simulateAccess(employees);
      setResults(res);
    } catch (error) {
      console.error("Error simulating access:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 text-gray-300 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Employee Access Simulator
      </h1>

      <EmployeeTable employees={employees} />
      <SimulateButton onClick={handleSimulate} />
      <ResultTable results={results} />
    </div>
  );
}

export default App;
