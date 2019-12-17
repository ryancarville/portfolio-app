import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="section-wrapper contact-wrapper">
        <header>
          <h2>Let's get to know each other! </h2>
        </header>
        <p>
          You can email me{" "}
          <b>
            <a
              href="mailto:ryancarville@gmail.com?subject=Hello%20from%20your%20awesome%20porfolio%20site!"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </b>
          <br />
          Looking forward to hearing from you!
        </p>

        <section id="about-links">
          <header>
            <h3>Online Docs and Profiles</h3>
          </header>
          <aside className="code-links">
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
                src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
                alt="linkedIn-icon"
              />
            </a>
          </aside>
        </section>
      </section>
    );
  }
}
