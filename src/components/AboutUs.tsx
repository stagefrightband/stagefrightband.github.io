import React, { useEffect } from 'react';
import '../styles.css';


const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};


const toggleClassBasedOnCookie = (cookieName: string, className: string): void => {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
};

const AboutUs: React.FC = () => {
  useEffect(() => {
    
    toggleClassBasedOnCookie("highcontrast", "high-contrast");
    toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
  }, []);

  return (
    <div>
      <div className="profile">
        <h1>About the Band</h1>
        <p>
          Stagefright Band was formed in 2015 when five passionate musicians met at a local jam session.
          United by their love for diverse musical genres, they decided to create a band that blends rock, blues,
          and alternative sounds. Their unique chemistry and shared vision have driven them to perform at numerous venues,
          captivating audiences with their dynamic performances.
        </p>
      </div>
      <div className="profile">
        <h1>Alice Johnson - Lead Guitar</h1>
        <p>
          Alice picked up the guitar at age 12, inspired by classic rock legends. Her intricate solos and creative riffs
          add depth and energy to the band's sound.
        </p>
      </div>
      <div className="profile">
        <h1>Bob Smith - Rhythm Guitar</h1>
        <p>
          Bob started playing guitar in high school, focusing on rhythm and harmony. His steady rhythms provide the backbone
          for the band's melodies.
        </p>
      </div>
      <div className="profile">
        <h1>Charlie Davis - Bass Guitar</h1>
        <p>
          Charlie chose the bass for its pivotal role in connecting the rhythm and melody. His groovy bass lines enhance the band's overall groove.
        </p>
      </div>
      <div className="profile">
        <h1>Diana Lee - Drums</h1>
        <p>
          Diana's passion for drumming began in her early teens. Her powerful beats and dynamic drumming style drive the band's performances.
        </p>
      </div>
      <div className="profile">
        <h1>Edward King - Vocalist</h1>
        <p>
          Edward has been singing since childhood, with a voice that captivates audiences. His heartfelt lyrics and vocal range bring the band's music to life.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;