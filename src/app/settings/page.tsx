import React from "react";
import "@/globals.css";
const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container fade-in">
  
      <div className="about-section">
        <h1>Setting 1</h1>
        <p className="about-section-text">
          Setting 1
        </p>
      </div>
      <div className="profiles-grid">
        <div className="profile fade-in">
          <h2>Setting 2</h2>
          <p className="profile-text">
            Setting 2
          </p>
        </div>
        <div className="profile fade-in">
          <h2>Setting  3</h2>
          <p className="profile-text">
            Setting 3
          </p>
        </div>
        <div className="profile fade-in">
          <h2>Setting 4</h2>
          <p className="profile-text">
            Setting 4
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
