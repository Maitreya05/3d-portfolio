import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* Contact Info */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="mailto:maitreyapatil1605@gmail.com"
                data-cursor="disable"
              >
                maitreyapatil1605@gmail.com
              </a>
            </p>

            <p>
              <a
                href="https://github.com/Maitreya05"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — Maitreya05
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/maitreya-patil-986121292/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Maitreya Patil
              </a>
            </p>

            <h4>Education</h4>
            <p>
              B.Tech Computer Engineering <br />
              PCCOER, Pune (2023–2027) <br />
              CGPA: 9.03
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Maitreya05"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/maitreya-patil-986121292/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Maitreya Patil</span>
            </h2>

            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;