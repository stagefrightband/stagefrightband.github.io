import React, { useEffect } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
const getCookie=(name:string):string|null=>{const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);if(parts.length===2)return parts.pop()?.split(";").shift()||null;return null};const toggleClassBasedOnCookie=(cookieName:string,className:string):void=>{const cookieValue=getCookie(cookieName)==="true";if(cookieValue){document.documentElement.classList.add(className)}else{document.documentElement.classList.remove(className)}};const MainPage:React.FC=()=>{useEffect(()=>{toggleClassBasedOnCookie("highcontrast","high-contrast");toggleClassBasedOnCookie("opendyslexic","open-dyslexic")},[]);
  return (
    <div className="mainpage-container">
      <video className="background-video" src="/Images/background.mp4" autoPlay loop muted playsInline />
      <h1 className="mainpage-text">Welcome to the Stage Fright band's Website!</h1>
      <div className="products-section">
        <Link to="/store" className="product-link mainpage-text">
          <img src="/Images/stagefrightmerch.webp" alt="Stage Fright Merch" className="product-image mainpage" />
          <p className="mainpage-text">Explore Our Merch</p>
        </Link>
        <Link to="/store" className="product-link mainpage-text">
          <img src="/Images/ticket.webp" alt="Stage Fright Tickets" className="product-image mainpage" />
          <p className="mainpage-text">Buy Tickets</p>
        </Link>
      </div>
      <div className="additional-links">
        <Link to="/aboutus" className="info-link mainpage-text">
          <h2>Learn more about our band and how it got started!</h2>
        </Link>
        <Link to="/tourdates" className="info-link mainpage-text">
          <h2>View our upcoming tours and buy tickets here!</h2>
        </Link>
        <Link to="/contactus" className="info-link mainpage-text">
          <h2>Get in touch with us!</h2>
        </Link>
      </div>
    </div>
  );
};
export default MainPage;