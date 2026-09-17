import React from "react";
import "@/globals.css";
const ContactUs: React.FC = () => {
  return (
    <>
  
      <h1 className="fade-in" style={{ textAlign: "center", fontSize: "2rem" }}>
        Contact Us
      </h1>
      <div className="contact-container slide-in">
        <div className="contact-left fade-in">
          <h2>Email Us/Customer Support</h2>
          <a
            style={{ textDecoration: "underline" }}
            href="mailto:stagefrightbandemail@gmail.com"
          >
            stagefrightbandemail@gmail.com
          </a>
        </div>
        <div className="contact-right fade-in">
          <h2>Bookings</h2>
            <div className="booking-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
              />
            </div>
            <div className="booking-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="booking-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="message-textarea"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
            </button>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
