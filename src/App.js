import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Patientlist from "./Components/Patientlist.js/Patientlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/patientlist" element={<Patientlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
