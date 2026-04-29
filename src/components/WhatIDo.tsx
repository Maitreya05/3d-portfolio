import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* FULL STACK */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1"></div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FULL STACK DEVELOPMENT</h3>
              <h4>Building Scalable Web Applications</h4>
              <p>
                I develop end-to-end web applications using modern technologies,
                focusing on clean UI, efficient backend systems, and scalable
                architecture.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Angular</div>
                <div className="what-tags">JavaScript</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* AI & SYSTEMS */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1"></div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI & SYSTEM DEVELOPMENT</h3>
              <h4>Building Intelligent Applications</h4>
              <p>
                I build AI-integrated systems such as OCR-based applications and
                computer vision projects, focusing on automation and real-world
                problem solving.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">MediaPipe</div>
                <div className="what-tags">OCR</div>
                <div className="what-tags">Computer Vision</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Data Processing</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* DATABASE & TOOLS */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1"></div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BACKEND & DATABASES</h3>
              <h4>Efficient Data Management</h4>
              <p>
                I design and optimize databases and backend systems to ensure
                reliable performance and smooth data flow across applications.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">MySQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Database Design</div>
                <div className="what-tags">API Integration</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Jira</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}