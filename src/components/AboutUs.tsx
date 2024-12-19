import React, { useEffect } from 'react';
import '../styles.css';


const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};


const toggleClassBasedOnCookie = (cookieName: string, className: string): void => {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
};

const AboutUs: React.FC = () => {
  useEffect(() => {
    
    toggleClassBasedOnCookie("highcontrast", "high-contrast");
    toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
  }, []);

  return (
    <div>
      <div className="profile">
        <h1>(Name) - (Instrument)</h1>
        <p>Bio goes here...</p>
      </div>
      <div className="profile">
        <h1>(Name) - (Instrument)</h1>
        <p>Bio goes here...</p>
      </div>
    </div>
  );
};

export default AboutUs;