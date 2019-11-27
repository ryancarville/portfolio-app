import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="section-wrapper">
        <header>
          <h2>About Me</h2>
        </header>
        <article id="about-text">
          <p>
            I am Ryan, a self starting, creative mind curently based in Zurich,
            Switzerland. After creating two sucessful commercial photography
            studios in New York City and San Francsico, I began to see the
            importance of development as it was a intricual part of the
            photography industry. In 2018 I decided to take a leap into the Full
            Stack development game and have been activly obtaining as much
            knowledge as I can. In January 2019, I began the Full Stack Wed
            Developers course offered by{" "}
            <a
              href="https://www.thinkful.com/"
              target="_blank"
              rel="noopener nolooper"
            >
              Thinkful
            </a>
            . It provided me with a solid foundation in JavaScript, React,
            Node.js, PostgreSQl and many other technoliges. In addtional to the
            course, I consumed as many books and online tutrorials about any and
            all web technolgies and continue to each day. Learning new skills
            and languages is a major part of this industry and it is something I
            find challenaging but more so rewarding.
          </p>
          <article>
            <div id="about-langs">
              <h3>My current stack of languages/technoliges are:</h3>
              <p>
                <b>
                  <span className="about-lang-item">React</span> -{" "}
                  <span className="about-lang-item">JavaScript</span> -{" "}
                  <span className="about-lang-item">Redux</span> -{" "}
                  <span className="about-lang-item">Node.js</span> -{" "}
                  <span className="about-lang-item">PostgreSQl</span> -{" "}
                  <span className="about-lang-item">Knex</span> -
                  <span className="about-lang-item">Express</span> -{" "}
                  <span className="about-lang-item">HTML5</span> -{" "}
                  <span className="about-lang-item">CSS3</span> -{" "}
                  <span className="about-lang-item">SASS</span>
                </b>
              </p>
            </div>
            <div id="about-links">
              <h3>Online Docs and Profiles</h3>
              <div>
                <a
                  href="https://drive.google.com/file/d/1pVjLfVzL4eDhskmRPgLazZFr6PuXtT8M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://enterpriseengineeringnetwork.org/images/resume-png-1.png"
                    alt="resume-icon"
                  />
                </a>
                <a
                  href="https://github.com/ryancarville"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                    alt="github-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/ryancarville/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
                    alt="linkedI-icon"
                  />
                </a>
              </div>
            </div>
          </article>
        </article>
      </section>
    );
  }
}
