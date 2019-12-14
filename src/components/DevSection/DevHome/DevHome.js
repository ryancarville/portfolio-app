import React, { Component } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../../../SiteContext";
import "./DevHome.css";

export default class DevHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classAnimation: "",
      adjective: "creative",
      startWordLoop: false
    };
  }
  rotateWords = () => {
    this.setState({
      startWordLoop: true,
      classAnimation: "fadeIn"
    });

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
    setTimeout(() => {
      this.rotateWords();
    }, 50);
  }
  static contextType = SiteContext;
  componentWillUnmount() {
    this.setState({
      startWordLoop: false
    });
  }
  render() {
    return (
      <section className={this.state.classAnimation + " section-wrapper"}>
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
              <span id="a-in-tag" width="10">
                A
              </span>
              <span id="adjective-in-tag">
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
