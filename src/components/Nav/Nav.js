import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <ul>
          <li id="nav-home">
            <Link to={"/"}>Home</Link>
          </li>
          <li id="nav-about">
            <Link to={"/about"}>About</Link>
          </li>
          <li id="nav-project-1">
            <Link to={"/BequiaApp"}>
              <img
                src="https://bequiaforum.com/images/bequia-logo.png"
                alt="forum-icon"
              />
              Bequia Forum
            </Link>
          </li>
          <li id="nav-project-2">
            <Link to={"/PhotoGramApp"}>
              <img
                src="https://beardystudios.com/Bloc_Capstone/photoGram/images/camera.png"
                alt="logo"
              />
              PhotoGram
            </Link>
          </li>
          <li id="nav-project-3">
            <Link to={"/MusicQuizApp"}>
              <img
                src="https://beardystudios.com/Bloc_Capstone/photoGram/images/headphones.png"
                alt="who-dat-logo"
              />{" "}
              Music Quiz
            </Link>
          </li>
          <li id="nav-contact">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
