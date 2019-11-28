import React from "react";
import { Link } from "react-router-dom";

const mobileNav = (
  <ul id="mobile-nav-bottom">
    <li id="nav-project-1">
      <Link to={"/BequiaApp"}>
        <img
          src="https://bequiaforum.com/images/bequia-logo.png"
          alt="forum-icon"
          samesite="none"
        />
        Bequia Forum
      </Link>
    </li>
    <li id="nav-project-2">
      <Link to={"/PhotoGramApp"}>
        <img
          src="https://beardystudios.com/Bloc_Capstone/photoGram/images/camera.png"
          alt="logo"
          samesite="none"
        />
        PhotoGram
      </Link>
    </li>
    <li id="nav-project-3">
      <Link to={"/MusicQuizApp"}>
        <img
          src="https://beardystudios.com/Bloc_Capstone/photoGram/images/headphones.png"
          alt="who-dat-logo"
          samesite="none"
        />{" "}
        Music Quiz
      </Link>
    </li>
  </ul>
);

export default mobileNav;
