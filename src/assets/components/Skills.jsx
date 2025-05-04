import React, { useState, useRef, useEffect } from "react";
import { FaHtml5, FaDraftingCompass, FaVideo } from "react-icons/fa";
import "../../App.css";
import Navbar from "./navbar";
import profilePic from "../pics/me.jpg";
import Echo from "../pics/echo.jpg";
import Terra from "../pics/terra.jpg";
import SE from "../pics/SE.png";
import Capstone from "../pics/capstone.jpg";
import Todo from "../pics/todo.jpg";
import Pokemon from "../pics/pokemon.jpg";

const cloudinaryBaseURL = "https://res.cloudinary.com/dnzqlbanb/video/upload/";

const skills = [
  {
    name: "Video Editing",
    icon: <FaVideo className="skill-icon text-red-400" />,
    description: "Editing videos using CapCut and other tools.",
    samples: [
      { type: "video", src: `${cloudinaryBaseURL}first.mp4`, caption: "Highlight Reel" },
      { type: "video", src: `${cloudinaryBaseURL}second.mp4`, caption: "Highlight Reel" },
      { type: "video", src: `${cloudinaryBaseURL}third.mp4`, caption: "Highlight Reel" },
    ],
  },
  {
    name: "Frontend",
    icon: <FaHtml5 className="skill-icon text-orange-500" />,
    description: "Structuring web pages using HTML, CSS, and React.",
    samples: [
      {
        type: "image",
        src: Echo,
        caption: "EchoGlow (ecommerse website)",
        github: "https://github.com/Kayce11/Echoglow",
      },
      {
        type: "image",
        src: Terra,
        caption: "Terra (ecommerse website)",
        github: "https://github.com/Kayce11/Echoglow",
        
      },
      {
        type: "image",
        src: Capstone,
        caption: "Capstone 2",
        live: "https://wmsurmis.online/",
       
      },
      {
        type: "image",
        src: Todo,
        caption: "Todo List",
        github: "https://github.com/Kayce11/todo",
        live: "https://kctodo.netlify.app/",
        
      },
      {
        type: "image",
        src: Pokemon,
        caption: "Pokemon",
        github: "https://github.com/Kayce11/pokemon",
        live: "https://pkkayce.netlify.app/",
      },

    ],
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentPage]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setCurrentPage(0);
  };

  const handleClose = () => {
    setSelectedSkill(null);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    if (selectedSkill && currentPage < selectedSkill.samples.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const currentSample =
    selectedSkill && selectedSkill.samples.length > 0
      ? selectedSkill.samples[currentPage]
      : null;

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <img src={profilePic} alt="My Profile" className="profile-picture" />
      </div>

      <div className="skills-section">
        <h2 className="skills-section-title">My Projects</h2>
        <p className="skills-section-description">
          Click on each skill to explore my projects and see samples of what I can do!
        </p>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card"
              onClick={() => handleSkillClick(skill)}
            >
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>

        {selectedSkill && currentSample && (
          <div className="skill-sample">
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
            <h3>{selectedSkill.name} Samples</h3>
            <p>{selectedSkill.description}</p>

            <div className="samples-grid">
              <div className="sample-item">
                {currentSample.type === "video" ? (
                  <video controls ref={videoRef} className="sample-media">
                    <source src={currentSample.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={currentSample.src}
                    alt={currentSample.caption}
                    className="sample-media"
                  />
                )}

                <p className="sample-caption">{currentSample.caption}</p>

                <div className="sample-links">
                  {currentSample.live ? (
                    <a
                      href={currentSample.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="no-link">No Live</span>
                  )}

                  {currentSample.github ? (
                    <a
                      href={currentSample.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      View GitHub
                    </a>
                  ) : (
                    <span className="no-link">No GitHub</span>
                  )}
                </div>
              </div>
            </div>

            <div className="navigation-buttons">
              <button
                className="nav-btn"
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
              >
                &larr; Previous
              </button>
              <button
                className="nav-btn"
                onClick={handleNextPage}
                disabled={currentPage >= selectedSkill.samples.length - 1}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
