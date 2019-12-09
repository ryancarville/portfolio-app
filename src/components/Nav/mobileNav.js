import React from "react";
import { Link } from "react-router-dom";

function MobileNav(props) {
  const devProjects = (
    <ul id="mobile-nav-bottom">
      <li id="nav-project-1">
        <Link to={"/BequiaApp"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/bequia-logo.png"
            alt="forum-icon"
            samesite="none"
          />
          Bequia Forum
        </Link>
      </li>
      <li id="nav-project-2">
        <Link to={"/PhotoGramApp"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/camera.png"
            alt="logo"
            samesite="none"
          />
          PhotoGram
        </Link>
      </li>
      <li id="nav-project-3">
        <Link to={"/MusicQuizApp"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/headphones.png"
            alt="who-dat-logo"
            samesite="none"
          />{" "}
          Music Quiz
        </Link>
      </li>
    </ul>
  );
  const photoCatagories = (
    <ul id="mobile-nav-bottom">
      <li id="nav-project-2">
        <Link to={"/portraits"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/portrait.png"
            alt="logo"
            samesite="none"
          />
          Portraits
        </Link>
      </li>
      <li id="nav-project-1">
        <Link to={"/food"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/food.png"
            alt="forum-icon"
            samesite="none"
          />
          Food
        </Link>
      </li>

      <li id="nav-project-3">
        <Link to={"/products"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/products.png"
            alt="who-dat-logo"
            samesite="none"
          />{" "}
          Products
        </Link>
      </li>
    </ul>
  );
  return props.state.devSite ? devProjects : photoCatagories;
}
export default MobileNav;
