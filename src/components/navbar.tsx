
import React from 'react';
import "@/globals.css"

export const Navbar: React.FC = () => {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <header>
      <nav className="topnav">
        <a className="logo" href="/">
          <img 
            src={`${publicUrl}/Media/FrightTitleIcon.webp`} 
            alt="Stage Fright Logo" 
            className="logoimage" 
          />
        </a>


        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
        <a href="/store">Store</a>
        <a href="/tourdates">Tour Dates</a>

        <a href="/shoppingcart">
          <img 
            src={`${publicUrl}/Media/shoppingcart.webp`} 
            alt="Shopping Cart" 
            className="iconimage" 
          />
        </a>

        <a href="/settings">
          <img 
            src={`${publicUrl}/Media/accessibilityicon.webp`} 
            alt="Accessibility Settings" 
            className="iconimage" 
          />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
