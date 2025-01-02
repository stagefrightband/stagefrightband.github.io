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
    <div className="aboutus-container">
      <div className="about-section">
        <h1>About the Band</h1>
        <p>
          Stage Fright was formed in 2015 when five passionate musicians met at a local jam session in downtown Seattle. Each member brought a unique style and background, ranging from classic rock to jazz and alternative genres. Their shared love for creating innovative music led them to collaborate and experiment with different sounds. Over countless hours of practice and numerous gigs at local venues, Stage Fright developed a distinctive sound that blends powerful riffs, melodic rhythms, and soulful vocals. Their dedication and chemistry have made them a favorite in the local music scene, and they continue to inspire audiences with their energetic performances.
        </p>
      </div>
      <div className="profiles-grid">
        <div className="profile">
          <img src="/Images/alice.jpg" alt="Alice Johnson" className="profile-image" />
          <h2>Alice Johnson - Lead Guitar</h2>
          <p>
            Alice picked up the guitar at age 12 after being inspired by legendary guitarists like Jimi Hendrix and Eric Clapton. Her passion for the instrument grew as she explored various genres, eventually specializing in lead guitar. Alice's intricate solos and creative riffs are the driving force behind the band's dynamic sound. She met the other band members through mutual friends and immediately connected over their shared musical aspirations. Alice's dedication to perfecting her craft adds depth and energy to every performance.
          </p>
        </div>
        <div className="profile">
          <img src="/Images/bob.jpg" alt="Bob Smith" className="profile-image" />
          <h2>Bob Smith - Rhythm Guitar</h2>
          <p>
            Bob started playing guitar in high school, focusing on rhythm and harmony to complement lead melodies. Influenced by bands like The Beatles and Red Hot Chili Peppers, he developed a strong sense of timing and groove. Bob's steady rhythms provide the backbone for the band's melodies, ensuring that every song has a solid foundation. He joined Stage Fright after attending one of their early performances and recognizing the potential for creating something special together.
          </p>
        </div>
        <div className="profile">
          <img src="/Images/charlie.jpg" alt="Charlie Davis" className="profile-image" />
          <h2>Charlie Davis - Bass Guitar</h2>
          <p>
            Charlie chose the bass for its pivotal role in connecting the rhythm and melody, drawn to the instrument's ability to add depth to the music. His groovy bass lines enhance the band's overall groove, creating a seamless blend between the guitar and drums. Charlie's background in funk and jazz allows him to incorporate diverse styles into the band's compositions. He met the band members during a local music workshop and was instantly impressed by their creative energy and commitment to their music.
          </p>
        </div>
        <div className="profile">
          <img src="/Images/diana.jpg" alt="Diana Lee" className="profile-image" />
          <h2>Diana Lee - Drums</h2>
          <p>
            Diana's passion for drumming began in her early teens, inspired by powerful drummers like Neil Peart and Sheila E. Her powerful beats and dynamic drumming style drive the band's performances, providing both rhythm and intensity. Diana's versatility allows her to adapt to various musical styles, making her an integral part of the band's sound. She connected with the band members through mutual participation in local music events, where her exceptional talent caught their attention.
          </p>
        </div>
        <div className="profile centered-profile">
          <img src="/Images/edward.jpg" alt="Edward King" className="profile-image" />
          <h2>Edward King - Vocalist</h2>
          <p>
            Edward has been singing since childhood, with a voice that captivates audiences and conveys deep emotion. His heartfelt lyrics and impressive vocal range bring the band's music to life, adding a soulful dimension to their sound. Edward's ability to connect with the audience and convey the band's message makes him a standout performer. He joined Stage Fright after collaborating on a songwriting project, where his vision perfectly aligned with the band's musical direction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;