import React, { useEffect, useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};

const toggleClassBasedOnCookie = (
  cookieName: string,
  className: string
): void => {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
};

const MainPage: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    toggleClassBasedOnCookie("highcontrast", "high-contrast");
    toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

    const timer = setTimeout(() => {
      setOverlayVisible(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mainpage-container zoom-in">
      <meta http-equiv="Cache-Control" content="max-age=31536000" />
      <link rel="preload" as="image" href="/Media/stagefrightmerch.webp" />
      <video
        className="background-video"
        src="/Media/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {overlayVisible && (
        <div className="welcome-overlay">
          <div className="overlay-text">Welcome to the Stage Fright band's Website!</div>
        </div>
      )}
      <div className="welcome-text-container">
        <h1 className="mainpage-text">Welcome to the Stage Fright band's Website!</h1>
      </div>
      <div className="products-section">
        <Link to="/store" className="product-link mainpage-text">
          <img
            src="/Media/stagefrightmerch.webp"
            alt="Stage Fright Merch"
            className="product-image mainpage"
          />
          <p className="mainpage-text">Explore Our Merch</p>
        </Link>
        <Link to="/store" className="product-link mainpage-text">
          <img
            src="/Media/ticket.webp"
            alt="Stage Fright Tickets"
            className="product-image mainpage"
          />
          <p className="mainpage-text">Buy Tickets</p>
        </Link>
      </div>
      <div className="additional-links">
        <Link to="/aboutus" className="info-link mainpage-text">
          <div className="welcome-text-container">
            <h2>Learn more about our band and how it got started!</h2>
          </div>
        </Link>
        <Link to="/tourdates" className="info-link mainpage-text">
          <div className="welcome-text-container">
            <h2>View our upcoming tours and buy tickets here!</h2>
          </div>
        </Link>
        <Link to="/contactus" className="info-link mainpage-text">
          <div className="welcome-text-container">
            <h2>Get in touch with us!</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
