import React, { useEffect } from "react";
import "../styles/contactus.css";


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

const ContactUs: React.FC = () => {
  useEffect(() => {
    
    toggleClassBasedOnCookie("highcontrast", "high-contrast");
    toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
  }, []);

  return (
    <div>
      <p>
        Email us:
        <a
          style={{ textDecoration: "underline" }}
          href="mailto:stagefrightbandemail@gmail.com"
        >
          stagefrightbandemail@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ContactUs;
