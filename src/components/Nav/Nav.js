import React, { Component } from "react";
import { Link } from "react-router-dom";
import DevProjects from "./DevProjects";
import PhotoCatagories from "./PhotoCatagories";
import MobileNav from "./MobileNav";
import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devSite: true,
      photoSite: false,
      showProjects: false
    };
  }
  handleSiteView = () => {
    var siteView;
    this.setState(
      {
        devSite: !this.state.devSite,
        photoSite: !this.state.photoSite
      },
      () => {
        if (this.state.devSite) {
          siteView = "dev";
          sessionStorage.setItem("siteView", siteView);
        } else if (this.state.photoSite) {
          siteView = "photo";
          sessionStorage.setItem("siteView", siteView);
        }
      }
    );
  };
  openProjects = () => {
    setTimeout(() => {
      this.setState({
        showProjects: true
      });
    }, 200);
  };
  closeProjects = () => {
    setTimeout(() => {
      this.setState({
        showProjects: false
      });
    }, 200);
  };
  componentDidMount() {
    if (sessionStorage.getItem("siteView") === "dev") {
      this.setState({
        devSite: true,
        photoSite: false
      });
    } else if (sessionStorage.getItem("siteView") === "photo") {
      this.setState({
        devSite: false,
        photoSite: true
      });
    }
  }

  render() {
    var toggleId;
    var switchId;
    var sectionPath;
    this.state.devSite
      ? (switchId = "dev-switch")
      : (switchId = "photo-switch");
    this.state.devSite
      ? (toggleId = "dev-toggle")
      : (toggleId = "photo-toggle");
    this.state.devSite
      ? (sectionPath = "/content-creation")
      : (sectionPath = "/");
    return (
      <nav>
        <section
          id="toggle-swicth-containter"
          onClick={() => this.closeProjects()}
        >
          <div id={switchId}>
            <div id={toggleId}></div>
            {this.state.devSite ? (
              <Link to={sectionPath} className="site-view-link">
                <i
                  className="fas fa-camera-retro dev-photo-switch-icon"
                  onClick={() => this.handleSiteView()}
                ></i>
              </Link>
            ) : (
              <Link to={sectionPath} className="site-view-link">
                <i
                  className="fas fa-layer-group dev-photo-switch-icon"
                  onClick={() => this.handleSiteView()}
                ></i>
              </Link>
            )}
          </div>
        </section>
        <ul>
          <li id="nav-home" onClick={this.closeProjects}>
            {this.state.devSite ? (
              <Link to={"/"}>Home</Link>
            ) : (
              <Link to={"/content-creation"}>Home</Link>
            )}
          </li>
          <li id="nav-about" onClick={this.closeProjects}>
            <Link to={"/about"}>About</Link>
          </li>
          <li id="nav-contact" onClick={this.closeProjects}>
            <Link to={"/contact"}>Contact</Link>
          </li>
          {this.state.devSite ? (
            this.state.showProjects ? (
              <DevProjects closeProjects={this.closeProjects} />
            ) : (
              <li
                id="desktop-nav-projects-link"
                onMouseEnter={this.openProjects}
                onClick={this.openProjects}
              >
                Projects
              </li>
            )
          ) : this.state.showProjects ? (
            <PhotoCatagories closeProjects={this.closeProjects} />
          ) : (
            <li id="desktop-nav-photos-link" onMouseEnter={this.openProjects}>
              Photos
            </li>
          )}
        </ul>
        <MobileNav state={this.state} />
      </nav>
    );
  }
}
