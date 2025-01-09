import React, { useEffect } from "react";
import "../styles.css";
const getCookie=(name:string):string|null=>{const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);if(parts.length===2)return parts.pop()?.split(";").shift()||null;return null};const toggleClassBasedOnCookie=(cookieName:string,className:string):void=>{const cookieValue=getCookie(cookieName)==="true";if(cookieValue){document.documentElement.classList.add(className)}else{document.documentElement.classList.remove(className)}};const ContactUs:React.FC=()=>{useEffect(()=>{toggleClassBasedOnCookie("highcontrast","high-contrast");toggleClassBasedOnCookie("opendyslexic","open-dyslexic")},[]);
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Email Us</h2>
        <a
          style={{ textDecoration: "underline" }}
          href="mailto:stagefrightbandemail@gmail.com"
        >
          stagefrightbandemail@gmail.com
        </a>
      </div>
      <div className="contact-right">
        <h2>Bookings</h2>
        <div className="booking-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="booking-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="booking-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="message-textarea"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </div>
  );
};
export default ContactUs;
