import React, { useEffect, useState } from 'react';
import '../styles/store.css';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return part.split(";").shift() || null;
  }
  return null;
}

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
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    toggleClassBasedOnCookie({ cookieName: "highcontrast", className: "high-contrast" });
    toggleClassBasedOnCookie({ cookieName: "opendyslexic", className: "open-dyslexic" });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOverlayVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleButtonClick = () => {
    setIsOverlayVisible(true);
  };

  return (
    <div>
      <div className="product-tile">
        <div className="product-image">
          <button className="product-button" onClick={handleButtonClick} aria-label="Stage Fright Merch"></button>
        </div>
        <div className="product-info">
          <p>Stage Fright T-Shirt</p>
        </div>
      </div>
      <div className={`overlay ${isOverlayVisible ? 'active' : ''}`}>
        <p>Test</p>
      </div>
    </div>
  );
};

export default Store;