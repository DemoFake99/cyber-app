import { Link } from "react-router-dom";
import "./SideNavbar.css";

function SideNavbar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">CyberSim</h2>

      <nav className="sidebar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/simulation">Simulation</Link>
        <Link to="/awareness">Awareness</Link>
      </nav>
    </div>
  );
}

export default SideNavbar;
