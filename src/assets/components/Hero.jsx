import React from "react";
import "../../App.css";
import profilePic from "../pics/Hero.png";
import Navbar from "./navbar";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Cv.pdf";
    link.download = "Kayce_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <p>Hello, It's Me</p>
            <h1>Kayce Vergara</h1>
            <h2>
              And I'm a <span className="highlight">WMSU Student</span>
            </h2>
            <p className="description">
              I'm a curious mind driven by creativity, always exploring new ways to bring ideas to life.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/kayceRamosVergara"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/lunavergara01?igsh=eXZodmluZjBqZ2lz"><i className="fab fa-instagram"></i></a>
              <a href="www.linkedin.com/in/kayce-ramos-vergara-15bb35359"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="button-group">
  <button className="download-cv" onClick={handleDownloadCV}>
    Download CV
  </button>
  <button className="experience-btn" onClick={() => window.location.href = '/Experience'}>
    My Experience
  </button>
</div>

          </div>

          <div className="image-content">
            <svg width="0" height="0">
              <defs>
                <clipPath id="blob" clipPathUnits="objectBoundingBox">
                  <path d="M0.856,0.388 C0.909,0.552,0.797,0.84,0.61,0.908 C0.424,0.976,0.172,0.824,0.074,0.626 C-0.025,0.428,0.017,0.184,0.169,0.099 C0.321,0.015,0.803,0.224,0.856,0.388Z" />
                </clipPath>
              </defs>
            </svg>

            <div className="image-wrapper">
              <img src={profilePic} alt="Kayce Vergara" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
