import React from 'react';
import '../styles/aboutus.css'

// Function to get a cookie by name
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

// Function to apply or remove a class based on cookie value
interface ToggleClassBasedOnCookie {
  (cookieName: string, className: string): void;
}

const toggleClassBasedOnCookie: ToggleClassBasedOnCookie = (cookieName, className) => {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
};

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie("highcontrast", "high-contrast");
toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="profile">
      <h1>(Name) - (Instrument)</h1>
      <p>(Bio)</p>
    </div>
    <br />
    <div className="profile">
      <h1>(Name) - (Instrument)</h1>
      <p>(Bio)</p>
    </div>
    <br />
    <div className="profile">
      <h1>(Name) - (Instrument)</h1>
      <p>(Bio)</p>
    </div>
    <br />
    <div className="profile">
      <h1>(Name) - (Instrument)</h1>
      <p>(Bio)</p>
    </div>
    </div>
  );
};

export default AboutUs;