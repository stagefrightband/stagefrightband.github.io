import React, { useEffect } from 'react';
import '../styles/tourdates.css';


function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
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

const TourDates: React.FC = () => {
  useEffect(() => {
    
    toggleClassBasedOnCookie({ cookieName: "highcontrast", className: "high-contrast" });
    toggleClassBasedOnCookie({ cookieName: "opendyslexic", className: "open-dyslexic" });
  }, []);

  return (
    <div>
            <br />
      <p className="tourname">The Crete's Labyrinth Tour</p>
      <div className="tourdiv">
        <div className="tourrow">
          <div className="tourinfo">
            <span className="date">January 3, 2025</span>
            <span className="city">Houston, Texas, U.S.A.</span>
            <span className="location">House of Blues Houston</span>
          </div>
          <div className="buytickets">
            <span>
              <a href="buytickets.html">
                <button>Buy Tickets</button>
              </a>
            </span>
          </div>
        </div>
        <div className="tourrow">
          <div className="tourinfo">
            <span className="date">January 5, 2025</span>
            <span className="city">Austin, Texas, U.S.A.</span>
            <span className="location">Emo's</span>
          </div>
          <div className="buytickets">
            <span>
              <a href="buytickets.html">
                <button>Buy Tickets</button>
              </a>
            </span>
          </div>
        </div>
        <div className="tourrow">
          <div className="tourinfo">
            <span className="date">January 6, 2025</span>
            <span className="city">Dallas, Texas, U.S.A.</span>
            <span className="location">Ferris Wheeler's Backyard & BBQ</span>
          </div>
          <div className="buytickets">
            <span>
              <a href="buytickets.html">
                <button>Buy Tickets</button>
              </a>
            </span>
          </div>
        </div>
        <div className="tourrow">
          <div className="tourinfo">
            <span className="date">January 8, 2025</span>
            <span className="city">Mesa, Arizona, U.S.A.</span>
            <span className="location">The Nile Theatre</span>
          </div>
          <div className="buytickets">
            <span>
              <a href="buytickets.html">
                <button>Buy Tickets</button>
              </a>
            </span>
          </div>
        </div>
        <div className="tourrow">
          <div className="tourinfo">
            <span className="date">January 9, 2025</span>
            <span className="city">San Diego, California, U.S.A.</span>
            <span className="location">House of Blues</span>
          </div>
          <div className="buytickets">
            <span>
              <a href="buytickets.html">
                <button>Buy Tickets</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDates;