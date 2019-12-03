import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="section-wrapper">
        <header>
          <h2>About Me</h2>
        </header>
        <article id="about-text">
          <p>
            I am Ryan, a self starting, creative mind currently based in Zurich,
            Switzerland. After creating two successful commercial photography
            studios in New York City and San Francisco, I began to see the
            importance of development as it was becoming an interracial part of
            the photography industry. In 2018 I decided to take a leap into the
            Full Stack development game and have been actively obtaining as much
            knowledge as I can. In January 2019, I began the Full Stack Wed
            Developers course offered by{" "}
            <a
              href="https://www.thinkful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thinkful
            </a>
            . It provided me with a solid foundation in JavaScript, React,
            Node.js, PostgreSQL and many other technologies. In additional to
            the course, I consumed as many books and online tutorials about any
            and all web technologies and continue to each day. Learning new
            skills and languages is a major part of this industry and it is
            something I find challenging but more so rewarding.
          </p>
          <article>
            <div id="about-langs">
              <h3>My current stack of languages/technologies are:</h3>
              <div id="about-langs-items">
                <span className="about-lang-item">React</span>
                <span className="about-lang-item">JavaScript</span>
                <span className="about-lang-item">Redux</span>
                <span className="about-lang-item">Node.js</span>
                <span className="about-lang-item">PostgreSQl</span>
                <span className="about-lang-item">Knex</span>
                <span className="about-lang-item">Express</span>
                <span className="about-lang-item">HTML5</span>
                <span className="about-lang-item">CSS3</span>
                <span className="about-lang-item">SASS</span>
              </div>
            </div>
          </article>
          <section id="about-links">
            <header>
              <h3>Online Docs and Profiles</h3>
            </header>
            <aside>
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
            </aside>
          </section>
        </article>
      </section>
    );
  }
}
