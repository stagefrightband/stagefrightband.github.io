import React, { FunctionComponent } from "react";
import "../styles/contactus.css";

// Function to get a cookie by name
interface GetCookie {
  (name: string): string | null;
}

const getCookie: GetCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return part.split(";").shift() || null;
  }
  return null;
};

// Function to apply or remove a class based on cookie value
interface ToggleClassBasedOnCookie {
  (cookieName: string, className: string): void;
}

const toggleClassBasedOnCookie: ToggleClassBasedOnCookie = (cookieName, className) => {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
};

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie("highcontrast", "high-contrast");
toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

const AboutUs: FunctionComponent = () => {
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

export default AboutUs;
