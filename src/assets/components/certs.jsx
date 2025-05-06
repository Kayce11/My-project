import React, { useState } from "react";
import Navbar from "./navbar";
import "../../App.css";

const Certs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const openModal = (imgSrc, title) => {
    setCurrentImage(imgSrc);
    setCurrentTitle(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const certificates = [
    {
      src: "/certs/cv.jpg",
      title: "📜 Civil Service Exam Passer (Professional Level)",
    },
    {
      src: "/certs/code.jpg",
      title: "🚑 Code Red Online Learning Program",
    },
    {
      src: "/certs/freee.jpg",
      title: "📘 FreeCodeCamp Certification",
    },
    ...["1", "2", "3", "4", "5", "6","7","8","9"].map((num) => ({
      src: `/certs/${num}.jpg`,
      title: `📚 Simplilearn Certification ${num}`,
    })),
  ];

  return (
    <>
      <Navbar />
      <div className="certs-container">
        <h2>My Certifications</h2>

        {/* Unified grid for all certificates */}
        <div className="simplilearn-images">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="cert-section"
              onClick={() => openModal(cert.src, cert.title)}
            >
              <div className="cert-card">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="cert-image"
                />
                <div className="cert-description">
                  <h4>{cert.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Zoom */}
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              ×
            </span>
            <h3>{currentTitle}</h3>
            <img
              src={currentImage}
              alt="Zoomed Certification"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certs;
