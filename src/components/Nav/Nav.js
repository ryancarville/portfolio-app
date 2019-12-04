import React, { Component } from "react";
import { Link } from "react-router-dom";
import mobileNav from "./mobileNav";
import "./Nav.css";
import DesktopPorjects from "./DesktopProjects";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: false
    };
  }
  openProjects = () => {
    this.setState({
      showProjects: true
    });
  };
  closeProjects = () => {
    this.SetState({
      showProjects: false
    });
  };
  render() {
    return (
      <nav>
        <ul>
          <li id="nav-home" onClick={this.closeProjects}>
            <Link to={"/"}>Home</Link>
          </li>
          <li id="nav-about" onClick={this.closeProjects}>
            <Link to={"/about"}>About</Link>
          </li>
          <li id="nav-contact" onClick={this.closeProjects}>
            <Link to={"/contact"}>Contact</Link>
          </li>
          {this.state.showProjects ? (
            <DesktopPorjects closeProjects={this.closeProjects} />
          ) : (
            <li id="desktop-nav-projects-link" onClick={this.openProjects}>
              Projects
            </li>
          )}
        </ul>
        {mobileNav}
      </nav>
    );
  }
}
