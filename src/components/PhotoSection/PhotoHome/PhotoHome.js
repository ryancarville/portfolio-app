import React from "react";
import "./PhotoHome.css";
import HomeGallery from "../Galleries/HomeGallery";

export default function PhotoHome(props) {
  return (
    <>
      <section className="section-wrapper" id="photo-home-wrapper">
        <HomeGallery />
        <aside id="photo-home-content">
          <header id="photo-home-header">
            <h1>Content Creation</h1>
          </header>
          <article>
            Image creation was my first true love. With over 10 years of
            experience in the commercial advertising and e-commerce industries,
            I obtained a vast knowledge on how to bring your brand imaging to
            life on the web.
          </article>
          <div id="photo-home-text-background"></div>
        </aside>
      </section>
    </>
  );
}
