import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";

import Dashboard from "./pages/Dashboard";
import Simulation from "./pages/Simulation";
import Awareness from "./pages/Awarness";

function App() {
  return (
    <BrowserRouter>
      <SideNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/awareness" element={<Awareness />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;