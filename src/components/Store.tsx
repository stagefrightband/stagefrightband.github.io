import React, { useEffect } from 'react';
import '../styles/store.css';


function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return part.split(";").shift() || null;
  }
  return null;
}


interface ToggleClassBasedOnCookieParams {
  cookieName: string;
  className: string;
}

function toggleClassBasedOnCookie({ cookieName, className }: ToggleClassBasedOnCookieParams): void {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}

const Store: React.FC = () => {
  useEffect(() => {
    
    toggleClassBasedOnCookie({ cookieName: "highcontrast", className: "high-contrast" });
    toggleClassBasedOnCookie({ cookieName: "opendyslexic", className: "open-dyslexic" });
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <p>Welcome to the Stage Fright Band store. Browse our merchandise below.</p>
    </div>
  );
};

export default Store;