import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./components/App";

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

// Apply high contrast and open dyslexic classes before rendering the app
toggleClassBasedOnCookie("highcontrast", "high-contrast");
toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
