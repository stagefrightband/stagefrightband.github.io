import React, { useState } from "react";
import "../styles.css";
const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="hamburger-nav">
      <meta http-equiv="Cache-Control" content="max-age=31536000" />
      <div className="hamburger-menu" onClick={toggleMenu}>
      <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
      <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
      <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
      </div>
      <ul className={`hamburger-links fade-in ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#/mainpage" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#/aboutus" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="#/contactus" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
        <li>
          <a href="#/store" onClick={toggleMenu}>
            Store
          </a>
        </li>
        <li>
          <a href="#/tourdates" onClick={toggleMenu}>
            Tour Dates
          </a>
        </li>
        <li>
          <a href="#/shoppingcart" onClick={toggleMenu}>
            Shopping Cart
          </a>
        </li>
        <li>
          <a href="#/settings" onClick={toggleMenu}>
            Accessibility Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default HamburgerMenu;