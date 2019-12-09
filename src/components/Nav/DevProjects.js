import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DevProjects extends Component {
  render() {
    return (
      <ul id="desktop-nav-projects">
        <li>
          <i
            className="fas fa-times"
            samesite="none"
            onClick={this.props.closeProjects}
          ></i>
        </li>
        <li id="nav-project-1">
          <Link to={"/BequiaApp"}>
            <img
              src="https://beardystudios.com/images/dev_site_images/bequia-logo.png"
              alt="forum-icon"
            />
            Bequia Forum
          </Link>
        </li>
        <li id="nav-project-2">
          <Link to={"/PhotoGramApp"}>
            <img
              src="https://beardystudios.com/images/dev_site_images/camera.png"
              alt="logo"
            />
            PhotoGram
          </Link>
        </li>
        <li id="nav-project-3">
          <Link to={"/MusicQuizApp"}>
            <img
              src="https://beardystudios.com/images/dev_site_images/headphones.png"
              alt="who-dat-logo"
            />{" "}
            Music Quiz
          </Link>
        </li>
      </ul>
    );
  }
}
