import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./PhotoHome.css";
import SiteContext from "../../SiteContext";

export default function PhotoHome(props) {
  const context = useContext(SiteContext);
  return (
    <section id="photo-home-wrapper">
      <header id="photo-home-header">
        <h1>PhotoHome</h1>
      </header>
      <article>
        This is under construction. Please check back again later. <br />
        For now you can also vist{" "}
        <a
          href="https://beardystudios.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>beardystudios.com</b>
        </a>{" "}
        to view my current image porfolio.
        <br />
        <br />
        <Link to={"/"} onClick={() => context.handleSiteView()}>
          Back to Full Stack Section
        </Link>
      </article>
    </section>
  );
}