import React from "react";
import Link from "next/link";
import "@/globals.css";
const TourDates: React.FC = () => {
  return (
    <div className="tourdates-container slide-up">
      <meta httpEquiv="Cache-Control" content="max-age=31536000" />
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
              <Link href="/store">
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
              <Link href="/store">
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
              <Link href="/store">
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
              <Link href="/store">
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
              <Link href="/store">
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
