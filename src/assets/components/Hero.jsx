import hakdog from "../pics/me.jpg";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
      <div className="hero-container">
        <header className="hero-header">
          <nav>
            <ul className="hero-nav-links">
              <li onClick={() => navigate("/about")}>About Me</li>
              <li>Skills</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello.</h1>
            <h1>I’m Kayce</h1>
            <h1>A WMSU Student</h1>
            
            <button className="hero-cv-button" onClick={() => navigate("/about")}>
              About me
            </button>
          </div>
    
          <div className="hero-image-container">
            <img src={hakdog} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>
    );
}

export default Hero;
