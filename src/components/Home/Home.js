import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classAnimation: "",
      adjective: "creative",
      startWordLoop: false
    };
  }
  rotateWords = () => {
    if (this.state.startWordLoop === true) {
      const words = ["creative", "curious", "courageous"];
      let i = 0;
      setInterval(() => {
        this.setState({
          adjective: words[i]
        });
        i++;
        if (i === words.length) {
          i = 0;
        }
      }, 4000);
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      startWordLoop: true,
      classAnimation: "fadeIn"
    });
    setTimeout(() => {
      this.rotateWords();
    }, 50);
  }
  componentWillUnmount() {
    this.setState({
      startWordLoop: false
    });
  }
  render() {
    return (
      <section className={this.state.classAnimation + " " + "section-wrapper"}>
        <article id="home">
          <header>
            <p id="home-hello">
              Hello there!{" "}
              <span id="waving-hand-emoji" role="img" aria-label="emoji">
                👋
              </span>{" "}
              I'm Ryan
            </p>
            <p id="home-tag">
              A{" "}
              <span>
                <b>{this.state.adjective}</b>
              </span>{" "}
              Full Stack Developer
            </p>
            <Link id="home-about-link" to="/about">
              About me
            </Link>
          </header>
          <span className="color-box" />
        </article>
      </section>
    );
  }
}
