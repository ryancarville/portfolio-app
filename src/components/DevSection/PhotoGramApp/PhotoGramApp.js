import React, { Component } from "react";
import "./PhotoGramApp.css";

export default class BequiaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: "fadeIn",
      demo_size: "desktop"
    };
  }
  handledemoSelect = () => {
    this.setState({
      fadeIn: ""
    });
    setTimeout(() => {
      if (this.state.demo_size === "desktop") {
        this.setState({
          demo_size: "mobile",
          fadeIn: "fadeIn"
        });
      } else if (this.state.demo_size === "mobile") {
        this.setState({
          demo_size: "desktop",
          fadeIn: "fadeIn"
        });
      }
    }, 5);
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="section-wrapper" id="project-1">
        <article className="project-wrapper">
          {this.state.demo_size === "desktop" ? (
            <div
              id="screenshot-photo-gram-desktop"
              className={this.state.fadeIn}
            />
          ) : (
            <div
              id="screenshot-photo-gram-mobile"
              className={this.state.fadeIn}
            />
          )}
          <div className="project-info">
            <span>
              <p className="project-title">PhotoGram App</p>
              {this.state.demo_size === "desktop" ? (
                <p className="demo-select" onClick={this.handledemoSelect}>
                  Mobile
                </p>
              ) : (
                <p className="demo-select" onClick={this.handledemoSelect}>
                  Desktop
                </p>
              )}
              <p className="project-text">
                PhotoGram is a Full Stack Mobile-First Web App for private photo
                archiving. Features include album creation, taging and
                captioning all images. Utilizes a RESTful API partnered with a
                PostgreSQL Database and JWT Authentication.
              </p>
            </span>
            <span className="project-technologies">
              <p>Technologies</p>
              <div className="technology-wrapper">
                <div className="technology-item">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="react-logo"
                    className="technologies-logo"
                  />
                  <p>React</p>
                </div>
                <div className="technology-item">
                  <img
                    src="data:image/png;base64,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"
                    alt="js-logo"
                    className="technologies-logo"
                  />
                  {"  "}
                  <p>JavaScript</p>
                </div>
                <div className="technology-item">
                  <img
                    src="https://pluspng.com/img-png/nodejs-logo-png-node-js-on-light-background-1843.png"
                    alt="node-logo"
                    className="technologies-logo"
                  />
                  {"  "}
                  <p>Node.js</p>
                </div>
                <div className="technology-item">
                  <img
                    src="https://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png"
                    alt="postgresql-logo"
                    className="technologies-logo"
                  />
                  {"  "}
                  <p>PostgreSQL</p>
                </div>
                <div className="technology-item">
                  <img
                    src="https://www.ecatechnologies.com/wp-content/uploads/2015/01/html5_websites.png"
                    alt="html-logo"
                    className="technologies-logo"
                  />
                  {"  "}
                  <p>HTML5</p>
                </div>
                <div className="technology-item">
                  <img
                    src="https://firebearstudio.com/blog/wp-content/uploads/2015/03/The-Best-CSS-Frameworks.png"
                    alt="css5-logo"
                    className="technologies-logo"
                  />
                  {"  "}
                  <p>CSS5</p>
                </div>
              </div>
            </span>

            <span className="git-hub-wrapper">
              <img
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
                alt="github-icon"
                className="git-hub-icon"
              />
              <span className="git-hub-links">
                <a
                  href="https://github.com/ryancarville/photo-gram-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Repo
                </a>
                <a
                  href="https://github.com/ryancarville/photo-gram-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Repo
                </a>
              </span>
            </span>
            <a
              href="https://photo-gram-app-lkqbt16v0.now.sh/"
              target="_blank"
              className="project-link"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt" samesite="none" />
              <p>Live Site</p>
            </a>
          </div>
        </article>
      </section>
    );
  }
}
