import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          {/* Current */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Developer</h4>
                <h5>PCCOER, Pune</h5>
              </div>
              <h3>2023–Present</h3>
            </div>
            <p>
              Pursuing B.Tech in Information Technology (CGPA: 9.03) with focus on 
              full-stack development, data structures, and AI-based systems. 
              Actively building real-world applications using MERN stack and modern tools.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Hajari Automation, Pune</h5>
              </div>
              <h3>June–July 2025</h3>
            </div>
            <p>
              Developed a business website using Angular, Node.js, Express, and MySQL. 
              Built 10+ responsive UI components and integrated REST APIs for seamless 
              data flow. Optimized database queries and collaborated using Git and Jira 
              in an Agile development environment.
            </p>
          </div>

          {/* Project Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Development</h4>
                <h5>Full Stack & AI Systems</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Built multiple real-world applications including an AI-powered expense 
              management system with OCR, a hospital management system, and a medical 
              rental platform. Focused on scalable architecture, efficient APIs, and 
              user-centric design.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;