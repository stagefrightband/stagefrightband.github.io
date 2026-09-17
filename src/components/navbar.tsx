
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
            alt="Marlowby Logo" 
            className="logoimage" 
          />
        </a>


        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
        <a href="/whatsincluded">Whats Included</a>
        <a href="/subscriptionplans">Subscription Plans</a>
        <a href="/featuredcities">Featured Cities</a>

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
