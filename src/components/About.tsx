import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Computer Science undergraduate with a strong focus on full-stack development and AI-driven systems. 
          I specialize in building scalable web applications using the MERN stack and have hands-on experience developing 
          real-world solutions through my internship experience.

          <br /><br />

          My work includes building AI-powered applications such as an OCR-based expense management system and 
          interactive web platforms with efficient backend systems. I enjoy working across the entire stack—from 
          designing responsive user interfaces to implementing optimized backend logic.

          <br /><br />

          I am particularly interested in solving practical problems using technology and continuously improving my 
          skills in full-stack development, system design, and AI integration.
        </p>
      </div>
    </div>
  );
};

export default About;