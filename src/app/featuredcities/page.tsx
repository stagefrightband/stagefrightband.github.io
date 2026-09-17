import React from "react";
import "@/globals.css";
const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container fade-in">
  
      <div className="about-section">
        <h1>City 1</h1>
        <p className="about-section-text">
          City 1
        </p>
      </div>
      <div className="profiles-grid">
        <div className="profile fade-in">
          <h2>City 2</h2>
          <p className="profile-text">
            City 2
          </p>
        </div>
        <div className="profile fade-in">
          <h2>City  3</h2>
          <p className="profile-text">
            City 3
          </p>
        </div>
        <div className="profile fade-in">
          <h2>City 4</h2>
          <p className="profile-text">
            City 4
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
