import React, { useEffect } from 'react';
import '../styles/store.css';

// Utility functions for cookies
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return part.split(";").shift() || null;
  }
  return null;
}

// Function to apply or remove a class based on cookie value
interface ToggleClassBasedOnCookieParams {
  cookieName: string;
  className: string;
}

function toggleClassBasedOnCookie({ cookieName, className }: ToggleClassBasedOnCookieParams): void {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}

const Store: React.FC = () => {
  useEffect(() => {
    toggleClassBasedOnCookie({ cookieName: "highcontrast", className: "high-contrast" });
    toggleClassBasedOnCookie({ cookieName: "opendyslexic", className: "open-dyslexic" });
  }, []);

  return (
    <div>
      <div className="product-tile">
        <div className="product-image">
          <img src="/Images/stagefrightmerch.webp" alt="Stage Fright Merch" />
        </div>
        <div className="product-info">
          <p>Stage Fright T-Shirt</p>
        </div>
      </div>
    </div>
  );
};

export default Store;