import React, { useEffect } from "react";
import "../styles.css";
const getCookie = (name: string) =>
  document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${name}=`))
    ?.split("=")[1] || null;
const toggleClassBasedOnCookie = (cookieName: string, className: string) => {
  document.documentElement.classList[
    getCookie(cookieName) === "true" ? "add" : "remove"
  ](className);
};
const AboutUs: React.FC = () => {
  useEffect(() => {
    toggleClassBasedOnCookie("highcontrast", "high-contrast");
    toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
  }, []);
  return (
    <div className="aboutus-container fade-in">
      <meta http-equiv="Cache-Control" content="max-age=31536000" />
      <div className="about-section">
        <h1>About the Band</h1>
        <p>
          Stage Fright was established in 2018 when five musicians gathered at a
          local jam session in downtown Seattle. While the members met each
          other in different ways and had different goals, their unique styles
          and love for creating music inspired them to start a band. Over many
          hours of practice and multiple gigs at venues, the band developed an
          exceptional sound with strong riffs, complementary rhythms, and
          soulful vocals. Each member's skill and passion have made Stage Fright
          one of the top-growing rock bands, and they continue to inspire and
          excite audiences with their energetic performances.
        </p>
      </div>
      <div className="profiles-grid">
        <div className="profile fade-in">
          <img
            src="/Images/leadguitar.webp"
            alt="Lead Guitar"
            className="profile-image"
          />
          <h2>Alice Johnson - Lead Guitar</h2>
          <p>
            Alice began learning guitar when she was 12 after being inspired by
            legendary guitarists like Jimi Hendrix and Eric Clapton. Her passion
            for the instrument grew as she gained more experience and
            specialized in lead guitar. Alice's creative solos and riffs develop
            the band's dynamic sound. She encountered the other band members via
            mutual friends and instantly connected over their love for music.
            Alice's dedication to improving her skills adds depth and energy to
            every performance.
          </p>
        </div>
        <div className="profile fade-in">
          <img
            src="/Images/rhythmguitar.webp"
            alt="Rhythm Guitar"
            className="profile-image"
          />
          <h2>Bob Smith - Rhythm Guitar</h2>
          <p>
            Bob started playing guitar after being inspired by his favorite
            bands, The Beatles and Red Hot Chili Peppers. He liked how rhythm
            and harmony complemented lead melodies, which led him to play
            rhythmic guitar. After many hours of practice, he had an exceptional
            sense of timing and groove. Bob's steady rhythms support the band's
            melodies, providing a solid foundation for every song. He joined
            Stage Fright after attending one of the band's early performances
            and realizing how his talent could benefit them.
          </p>
        </div>
        <div className="profile fade-in">
          <img
            src="/Images/bassguitar.webp"
            alt="Bass Guitar"
            className="profile-image"
          />
          <h2>Charlie Davis - Bass Guitar</h2>
          <p>
            Charlie wanted to play the bass in high school because of its deep,
            rich sounds. He adds depth and supports the band's music by
            connecting the rhythm and melody. His groovy bass lines blend the
            guitar and drums, and Charlie's background in jazz adds a unique
            style to the band's music. He met the band members when he attended
            a local music workshop to try and gain advice on how to improve, and
            he was impressed by their energy and passion for music, which
            inspired him to join them.
          </p>
        </div>
        <div className="profile fade-in">
          <img src="/Images/drums.webp" alt="Drums" className="profile-image" />
          <h2>Diana Lee - Drums</h2>
          <p>
            Diana's passion for drumming began in her early teens when drummers
            like Neil Peart and Sheila E inspired her. Her powerful beats
            provide rhythm and intensity and drive the band's performances.
            Diana's knowledge of various drum patterns and excellent timekeeping
            skills greatly support the band's sound. She was invited to join
            Stage Fright because of her exceptional talent at a music
            performance.
          </p>
        </div>
        <div className="profile centered-profile fade-in">
          <img
            src="/Images/microphone.webp"
            alt="Microphone"
            className="profile-image"
          />
          <h2>Edward King - Vocalist</h2>
          <p>
            Edward has been singing since middle school, with a deep, emotional
            voice that captivates audiences. His soulful lyrics, fantastic voice
            control, and good tone allow him to connect with the audience and
            convey the message of each song. He joined Stage Fright after
            finding out about the band online, where his goal of performing for
            a band met the band's need for a singer.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
