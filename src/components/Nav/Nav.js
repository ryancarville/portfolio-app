import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import "./Nav.css";
import DevPorjects from "./DevProjects";
import PhotoCatagories from "./PhotoCatagories";
import SiteContext from "../../SiteContext";

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
    this.setState({
      showProjects: false
    });
  };

  render() {
    var toggleId;
    var switchId;
    this.props.appState.devSite
      ? (switchId = "dev-switch")
      : (switchId = "photo-switch");
    this.props.appState.devSite
      ? (toggleId = "dev-toggle")
      : (toggleId = "photo-toggle");
    return (
      <SiteContext.Consumer>
        {context => (
          <nav>
            <span id="toggle-swicth-containter">
              <div id={switchId} onClick={() => this.props.handleSiteView()}>
                <div id={toggleId}></div>
                {this.props.appState.devSite ? (
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
              {context.appState.devSite ? (
                this.state.showProjects ? (
                  <DevPorjects closeProjects={this.closeProjects} />
                ) : (
                  <li
                    id="desktop-nav-projects-link"
                    onClick={this.openProjects}
                  >
                    Projects
                  </li>
                )
              ) : this.state.showProjects ? (
                <PhotoCatagories closeProjects={this.closeProjects} />
              ) : (
                <li id="desktop-nav-projects-link" onClick={this.openProjects}>
                  Photos
                </li>
              )}
            </ul>
            <MobileNav />
          </nav>
        )}
      </SiteContext.Consumer>
    );
  }
}
