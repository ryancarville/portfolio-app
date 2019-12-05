import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./PhotoHome.css";
import SiteContext from "../../../SiteContext";
import HomeGallery from "../Galleries/HomeGallery";

export default function PhotoHome(props) {
  const context = useContext(SiteContext);
  return (
    <section id="photo-home-wrapper">
      <div id="photo-home-text-background"></div>
      <HomeGallery />
      <aside id="photo-home-content">
        <header id="photo-home-header">
          <h1>Content Creation</h1>
        </header>
        <article>
          Image creation was my first true love. With over 10 years of
          experience in the commercial advertising and e-commerce industried, I
          obtain a vast knowledge on how to bring your brand imaging to life on
          the web.
        </article>
      </aside>
    </section>
  );
}