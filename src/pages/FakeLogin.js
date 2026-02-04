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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setCaptchaInput("");
    };

    const resetForm = () => {
        setUsername("");
        setPassword("");
        setCaptchaInput("");
        refreshCaptcha();
    };

    const handleSignIn = async () => {
        if (captchaInput.toUpperCase() !== captcha) {
            alert("Invalid Captcha! Please try again.");
            refreshCaptcha();
            return;
        }

        const event = {
            type: "PHISHING_SIMULATION",
            username: username ? `${username.substring(0, 3)}***` : "unknown_user",
        };

        try {
            const response = await fetch("http://localhost:5000/phishing-log", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(event),
            });

            if (response.ok) {
                alert(
                    "⚠ PHISHING SIMULATION DETECTED!\n\n" +
                    "In a real attack, your credentials would have been sent to a hacker's database.\n" +
                    "Check the Dashboard to see how this event was logged."
                );
                resetForm();
            }
        } catch (error) {
            console.error("Backend unreachable:", error);
            alert("Simulation error: Make sure your backend server is running on port 5000!");
        }
    };

    return (
        <div className="page">
            <header className="header">
                <div className="logo">
                    <span className="logo-bold">MasterSoft</span>
                    <span className="logo-light"> Accelerating Education</span>
                </div>
            </header>

            <div className="login-container">
                <div className="login-card">
                    <h3>Welcome to Student Portal</h3>

                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <div className="password-row">
                        <label>Password</label>
                        <a href="#forgot">Get Username & Password</a>
                    </div>
                    <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="captcha-row">
                        <div className="captcha-box">
                            <span className="captcha-text">{captcha}</span>
                            <button
                                type="button"
                                className="refresh-btn"
                                onClick={refreshCaptcha}
                            >
                                ⟳
                            </button>
                        </div>

                        <input
                            type="text"
                            placeholder="Enter Captcha"
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                        />
                    </div>

                    <div className="actions">
                        <a href="#terms" className="link">Terms of Use</a>
                        {/* The button now triggers the internal handleSignIn */}
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>

                    <a href="#home" className="home-link">Home</a>
                </div>
            </div>

            <footer className="footer">Powered by MasterSoft</footer>
        </div>
    );
}

export default FakeLogin;