import React from "react";
import { Link } from "react-router-dom";

function MobileNav(props) {
  const devProjects = (
    <ul id="mobile-nav-bottom">
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
    </ul>
  );
  const photoCatagories = (
    <ul id="mobile-nav-bottom">
      <li className="nav-project-1">
        <Link to={"/food"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/food.png"
            alt="forum-icon"
          />
          Food
        </Link>
      </li>

      <li className="nav-project-2">
        <Link to={"/portraits"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/portrait.png"
            alt="logo"
          />
          Portraits
        </Link>
      </li>

      <li className="nav-project-3">
        <Link to={"/products"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/products.png"
            alt="who-dat-logo"
          />{" "}
          Products
        </Link>
      </li>
    </ul>
  );
  return props.state.devSite ? devProjects : photoCatagories;
}
export default MobileNav;
