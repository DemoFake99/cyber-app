import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";

import Dashboard from "./pages/Dashboard";
import Awareness from "./pages/Awarness";
import FakeLogin from "./pages/FakeLogin";

function App() {
  return (
    <BrowserRouter>
      <SideNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/simulation" element={<FakeLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;