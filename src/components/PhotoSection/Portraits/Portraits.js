import React from "react";
import "./Portraits.css";
import Gallery from "../Galleries/Gallery";

export default function Portraits(props) {
  window.scroll(0, 0);
  return (
    <section className="photo-section-wrapper">
      <header>
        <h1>Portraits</h1>
      </header>
      <article>
        <p>
          Time-capsules from sometime ago. I always found the eyes to be every
          ones best feature.
        </p>
      </article>
      <Gallery section="portraits" folder="portraits" />
    </section>
  );
}
