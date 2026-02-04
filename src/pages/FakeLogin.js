import { useState } from "react";
import "./FakeLogin.css";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

function FakeLogin() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-bold">MasterSoft</span>
          <span className="logo-light"> Accelerating Education</span>
        </div>
        <div className="social-icons">
          <span>f</span>
          <span>in</span>
          <span>▶</span>
        </div>
      </header>

      {/* Login Card */}
      <div className="login-container">
        <div className="login-card">
          <h3>Welcome to Student Portal</h3>

          <label>Username</label>
          <input type="text" placeholder="Username" />

          <div className="password-row">
            <label>Password</label>
            <a href="#">Get Username & Password</a>
          </div>
          <input type="password" placeholder="Password" />

          <div className="captcha-row">
            <div className="captcha-box">
              <span className="captcha-text">{captcha}</span>
              <button
                type="button"
                className="refresh-btn"
                onClick={refreshCaptcha}
                title="Refresh Captcha"
              >
                ⟳
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter Captcha Code"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
          </div>

          <div className="actions">
            <a href="#" className="link">Terms of Use</a>
            <button>Sign In</button>
          </div>

          <a href="#" className="home-link">Home</a>
        </div>
      </div>

      <footer className="footer">
        Powered by MasterSoft
      </footer>
    </div>
  );
}

export default FakeLogin;
