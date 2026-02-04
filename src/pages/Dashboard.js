import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/phishing-logs");
      const data = await response.json();
      setLogs(data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Simulation Logs</h1>
        <button className="refresh-btn" onClick={fetchLogs}>
          {loading ? "Syncing..." : "Refresh Logs"}
        </button>
      </div>
      <p className="subtitle">Real-time data from active security simulations</p>

      <div className="table-container">
        <table className="log-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Simulation Type</th>
              <th>Username Context</th>
              <th>Timestamp</th>
              <th>Event Outcome</th>
            </tr>
          </thead>
          <tbody>
            {logs.length > 0 ? (
              logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>
                    <span className="badge-attack">{log.attack_type}</span>
                  </td>
                  <td>
                    <span className="user-masked">{log.username_masked}</span>
                  </td>
                  <td>{new Date(log.event_time).toLocaleString()}</td>
                  <td className="status-alert">⚠️ Credential Exposure</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  {loading ? "Loading data..." : "No security events detected."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;