"use client";
import React, { useState } from "react";
import "@/globals.css";
const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="hamburger-nav">
  
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
      </div>
      <ul className={`hamburger-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/aboutus" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="/contactus" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
        <li>
          <a href="/store" onClick={toggleMenu}>
            Whats Included
          </a>
        </li>
        <li>
          <a href="/tourdates" onClick={toggleMenu}>
            Subscription Plans
          </a>
        </li>
        <li>
          <a href="/shoppingcart" onClick={toggleMenu}>
            Featured Cities
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