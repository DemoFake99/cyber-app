import { useState } from "react";
import "./Awarness.css";

function Awareness() {
  const [selectedImage, setSelectedImage] = useState(null);

  const threats = [
    {
      title: "Phishing",
      description:
        "Phishing is a cyber attack where attackers use fake emails or messages to trick users into revealing sensitive information.",
      prevention:
        "Do not click unknown links, verify sender details, enable 2FA.",
      image: "/images/phishing.png",
    },
    {
      title: "Unsecure Network",
      description:
        "Public or unsecured networks allow attackers to intercept data.",
      prevention:
        "Avoid public Wi-Fi and use VPN.",
      image: "/images/unsecure.webp",
    },
    {
      title: "Malware",
      description:
        "Malware is malicious software that harms systems.",
      prevention:
        "Install trusted software and antivirus.",
      image: "/images/malware.jpg",
    },
    {
      title: "Insider Threat",
      description:
        "Threats caused by trusted internal users.",
      prevention:
        "Monitor activity and restrict access.",
      image: "/images/insider.png",
    },
  ];

  return (
    <div className="awareness-container">
      <h2 className="page-title">Awareness</h2>
      <p className="page-subtitle">
        Click on a threat to view its attack diagram.
      </p>

      <div className="card-grid">
        {threats.map((threat, index) => (
          <div
            className="card"
            key={index}
            onClick={() => setSelectedImage(threat.image)}
          >
            <h3 className="card-title">{threat.title}</h3>
            <p><strong>What it is:</strong> {threat.description}</p>
            <p><strong>How to prevent:</strong> {threat.prevention}</p>
          </div>
        ))}
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close">&times;</span>
            <img src={selectedImage} alt="Threat Diagram" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Awareness;
