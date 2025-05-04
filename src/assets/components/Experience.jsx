import React, { useState } from "react";
import "../../App.css";
import Navbar from "./navbar";
import Logo from "../pics/logo.jpg";
import profile from "../pics/image.png";
import system1 from "../pics/system1.png";
import system2 from "../pics/system2.png";
import system3 from "../pics/system3.png";
import system4 from "../pics/system4.png";
import system5 from "../pics/system5.png";
import system6 from "../pics/system6.png";
import system7 from "../pics/system7.png";
import system8 from "../pics/system8.png";
import system9 from "../pics/system9.png";
import system10 from "../pics/system10.png";
import system11 from "../pics/system11.png";

const systemImages = [
  system1, system2, system3, system4, system5, system6,
  system7, system8, system9, system10, system11
];

const Experience = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % systemImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + systemImages.length) % systemImages.length);
  };

  return (
    <>
      <Navbar />
      <div className="experience-wrapper">
        <h2 className="experience-heading">Experience</h2>

        <div className="experience-cards">
          <div className="experience-card glass-effect">
            <img src={profile} alt="Your Portrait" className="experience-profile" />
            <h3 className="company-name">SURV Co.</h3>
            <p className="position">System Analyst</p>
            <p className="duration">2024 – Present</p>
            <button className="see-more-btn" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "View More"}
            </button>
          </div>

          {/* Future Experience Placeholder */}
          <div className="experience-card update-card">
            <h3>Update for New Experience</h3>
            <p>Stay tuned for upcoming roles and projects.</p>
            <button className="btn-ghost">Coming Soon</button>
          </div>
        </div>
        <div className={`experience-details-card ${showDetails ? "reveal" : "hidden"}`}>
          <div className="logo-description">
            <img src={Logo} alt="SURV Co. Logo" className="logo-thumbnail" />
            <div>
              <h4>Logo Description</h4>
              <p>
                The SURV Co. logo blends the initials <strong>S, U, R, and V</strong> of Sanguila,
                Undo, Rodrigo, and Vergara. Its dynamic form represents innovation and synergy.
              </p>
            </div>
          </div>

          <h4>Company Objectives</h4>
          <ul>
            <li>Deliver secure, scalable, client-first IT solutions.</li>
            <li>Improve business efficiency through tech innovation.</li>
            <li>Align systems with strategic digital goals.</li>
          </ul>

          <h4>Project: WMSU Library Attendance</h4>
          <p>
            Developed a smart attendance system using real-time text detection at WMSU Library.
            Ensures accurate logs and improved user experience.
          </p>
          <p>
            <strong>Location:</strong> WMSU Library, Normal Road, Zamboanga City<br />
            <strong>Client:</strong> WMSU Library — hybrid lending service with smart tracking.
          </p>
          <h4>System Gallery: WMSU Attendance Interface</h4>
          <div className="slideshow-container">
            <button className="slide-btn prev" onClick={prevSlide}>&#10094;</button>
            <img
              src={systemImages[currentSlide]}
              alt={`Screenshot ${currentSlide + 1}`}
              className="slide-image"
            />
            <button className="slide-btn next" onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
