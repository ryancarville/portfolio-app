import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DevProjects extends Component {
  render() {
    return (
      <>
        <li onClick={this.props.closeProjects}>
          <i className="fas fa-times"></i>
        </li>
        <li className="nav-project-1">
          <Link to={"/BequiaApp"}>
            <img
              src="https://beardystudios.com/images/dev_site_images/bequia-logo.png"
              alt="forum-icon"
            />
            Bequia Forum
          </Link>
        </li>
        <li className="nav-project-2">
          <Link to={"/PhotoGramApp"}>
            <img
              src="https://beardystudios.com/images/dev_site_images/camera.png"
              alt="logo"
            />
            PhotoGram
          </Link>
        </li>
        <li className="nav-project-3">
          <Link to={"/MusicQuizApp"}>
            <img
              src="https://beardystudios.com/images/dev_site_images/headphones.png"
              alt="who-dat-logo"
            />{" "}
            Music Quiz
          </Link>
        </li>
      </>
    );
  }
}
