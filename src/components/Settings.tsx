import React from 'react';
import '../styles/Settings.css'; 

// Function to get a cookie by name
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return part.split(";").shift() || null;
  }
  return null;
}

// Function to set a cookie with a specific name and value (no expiration)
function setCookie(name: string, value: string): void {
  document.cookie = `${name}=${value}; path=/; SameSite=Lax`;
}

// Function to apply or remove a class based on cookie value
function toggleClassBasedOnCookie(cookieName: string, className: string): void {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}

// Function to initialize switch states based on cookies
function initializeSwitches() {
  const highContrastToggle = document.getElementById("highcontrast-toggle") as HTMLInputElement;
  const openDyslexicToggle = document.getElementById("opendyslexic-toggle") as HTMLInputElement;

  // Initialize the High Contrast toggle switch
  if (highContrastToggle) {
    highContrastToggle.checked = getCookie("highcontrast") === "true";
    highContrastToggle.addEventListener("change", () => {
      const newValue = highContrastToggle.checked ? "true" : "false";
      setCookie("highcontrast", newValue);
      toggleClassBasedOnCookie("highcontrast", "high-contrast");
    });
  }

  if (openDyslexicToggle) {
    openDyslexicToggle.checked = getCookie("opendyslexic") === "true";
    openDyslexicToggle.addEventListener("change", () => {
      const newValue = openDyslexicToggle.checked ? "true" : "false";
      setCookie("opendyslexic", newValue);
      toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
    });
  }
}

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie("highcontrast", "high-contrast");
toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

// Initialize switches when the page loads
window.addEventListener("DOMContentLoaded", initializeSwitches);

const Settings: React.FC = () => {
  return (
    <div>
      <div className="setting high-contrast">
        <div className="setting-header">
          <strong>High Contrast</strong>
          <label className="switch">
            <input type="checkbox" id="highcontrast-toggle" />
            <span className="slider round"></span>
          </label>
        </div>
        <p>
          Makes text easier to read by increasing the difference between the text and its background color. Useful for people with low vision or color blindness.
        </p>
      </div>
      <div className="setting open-dyslexic">
        <div className="setting-header">
          <strong>Open Dyslexic Font</strong>
          <label className="switch">
            <input type="checkbox" id="opendyslexic-toggle" />
            <span className="slider round"></span>
          </label>
        </div>
        <p>Uses a font that makes reading easier for people with dyslexia.</p>
      </div>
    </div>
  );
};

export default Settings;