import React, { Component } from "react";
import { Link } from "react-router-dom";
import mobileNav from "./mobileNav";
import "./Nav.css";
import DesktopPorjects from "./DesktopProjects";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: false,
      dev: true,
      photo: false
    };
  }
  openProjects = () => {
    this.setState({
      showProjects: true
    });
  };
  closeProjects = () => {
    this.setState({
      showProjects: false
    });
  };
  handleDevPhotoToggle = () => {
    this.setState({
      dev: !this.state.dev,
      photo: !this.state.photo
    });
    this.props.handleSiteView();
  };
  render() {
    var toggleId;
    var switchId;
    this.state.dev ? (switchId = "dev-switch") : (switchId = "photo-switch");
    this.state.dev ? (toggleId = "dev-toggle") : (toggleId = "photo-toggle");
    return (
      <nav>
        <span id="toggle-swicth-containter">
          <div id={switchId} onClick={this.handleDevPhotoToggle}>
            <div id={toggleId}></div>
            {this.state.dev ? (
              <i className="fas fa-camera-retro dev-photo-switch-icon"></i>
            ) : (
              <i className="fas fa-layer-group dev-photo-switch-icon"></i>
            )}
          </div>
        </span>
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
