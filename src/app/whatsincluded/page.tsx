import React from "react";
import "@/globals.css";
const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container fade-in">
  
      <div className="about-section">
        <h1>Whats Included 1</h1>
        <p className="about-section-text">
          Whats Included 1
        </p>
      </div>
      <div className="profiles-grid">
        <div className="profile fade-in">
          <h2>Whats Included 2</h2>
          <p className="profile-text">
            Whats Included 2
          </p>
        </div>
        <div className="profile fade-in">
          <h2>Whats Included  3</h2>
          <p className="profile-text">
            Whats Included 3
          </p>
        </div>
        <div className="profile fade-in">
          <h2>Whats Included 4</h2>
          <p className="profile-text">
            Whats Included 4
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
