import React from "react";
import "@/globals.css";
const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container fade-in">
      <div className="about-section">
        <h1>Subscription Plan 1</h1>
        <p className="about-section-text">
          Subscription Plan 1
        </p>
      </div>
      <div className="profiles-grid">
        <div className="profile fade-in">
          <h2>Subscription Plan 2</h2>
          <p className="profile-text">
            Subscription Plan 2
          </p>
        </div>
        <div className="profile fade-in">
          <h2>Subscription Plan  3</h2>
          <p className="profile-text">
            Subscription Plan 3
          </p>
        </div>
        <div className="profile fade-in">
          <h2>Subscription Plan 4</h2>
          <p className="profile-text">
            Subscription Plan 4
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
