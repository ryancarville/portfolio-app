import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classAnimation: "hideUntilLoaded",
      adjective: "passionate"
    };
  }
  rotateWords = () => {
    const words = ["passionate", "self-taught", "committed"];
    let i = 0;
    setInterval(() => {
      console.log(i);
      this.setState({
        adjective: words[i]
      });
      i++;
      if (i === words.length) {
        i = 0;
      }
    }, 4000);
  };
  componentDidMount() {
    this.setState({
      classAnimation: "fadeIn"
    });
    this.rotateWords();
  }

  render() {
    return (
      <section className={this.state.classAnimation + " " + "section-wrapper"}>
        <article id="home">
          <header>
            <p id="home-hello">
              Hello there! <div id="waving-hand-emoji">👋</div> I'm Ryan
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

          <div id="color-box"></div>
        </article>
      </section>
    );
  }
}
