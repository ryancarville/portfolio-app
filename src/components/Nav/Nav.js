import React, { Component } from "react";
import { Link } from "react-router-dom";
import mobileNav from "./mobileNav";
import "./Nav.css";
import DesktopPorjects from "./DesktopProjects";

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
          <li id="nav-contact">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <DesktopPorjects />
        </ul>
        {mobileNav}
      </nav>
    );
  }
}
