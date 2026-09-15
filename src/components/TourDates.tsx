import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles.css";
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
function toggleClassBasedOnCookie({
  cookieName,
  className,
}: ToggleClassBasedOnCookieParams): void {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}
const TourDates: React.FC = () => {
  useEffect(() => {
    toggleClassBasedOnCookie({
      cookieName: "highcontrast",
      className: "high-contrast",
    });
    toggleClassBasedOnCookie({
      cookieName: "opendyslexic",
      className: "open-dyslexic",
    });
  }, []);
  return (
    <div className="tourdates-container slide-up">
      <meta http-equiv="Cache-Control" content="max-age=31536000" />
      <br />
      <h1 className="tour-dates-heading">Tour Dates</h1>
      <p className="tourname">The Crete's Labyrinth Tour</p>
      <div className="tourdiv">
        <div className="tourrow fade-in">
          <div className="tourinfo">
            <span className="date tourinfo-text">February 3, 2025</span>
            <span className="city tourinfo-text">Houston, Texas, U.S.A.</span>
            <span className="location tourinfo-text">House of Blues Houston</span>
          </div>
          <div className="buytickets">
            <span>
              <Link to="/store">
                <button>Buy Tickets</button>
              </Link>
            </span>
          </div>
        </div>
        <div className="tourrow fade-in">
          <div className="tourinfo">
            <span className="date tourinfo-text">February 5, 2025</span>
            <span className="city tourinfo-text">Austin, Texas, U.S.A.</span>
            <span className="location tourinfo-text">Emo's</span>
          </div>
          <div className="buytickets">
            <span>
              <Link to="/store">
                <button>Buy Tickets</button>
              </Link>
            </span>
          </div>
        </div>
        <div className="tourrow fade-in">
          <div className="tourinfo">
            <span className="date tourinfo-text">February 6, 2025</span>
            <span className="city tourinfo-text">Dallas, Texas, U.S.A.</span>
            <span className="location tourinfo-text">Ferris Wheeler's Backyard & BBQ</span>
          </div>
          <div className="buytickets">
            <span>
              <Link to="/store">
                <button>Buy Tickets</button>
              </Link>
            </span>
          </div>
        </div>
        <div className="tourrow fade-in">
          <div className="tourinfo">
            <span className="date tourinfo-text">February 8, 2025</span>
            <span className="city tourinfo-text">Mesa, Arizona, U.S.A.</span>
            <span className="location tourinfo-text">The Nile Theatre</span>
          </div>
          <div className="buytickets">
            <span>
              <Link to="/store">
                <button>Buy Tickets</button>
              </Link>
            </span>
          </div>
        </div>
        <div className="tourrow fade-in">
          <div className="tourinfo">
            <span className="date tourinfo-text">February 9, 2025</span>
            <span className="city tourinfo-text">San Diego, California, U.S.A.</span>
            <span className="location tourinfo-text">House of Blues San Diego</span>
          </div>
          <div className="buytickets">
            <span>
              <Link to="/store">
                <button>Buy Tickets</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TourDates;
