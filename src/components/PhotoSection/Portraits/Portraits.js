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
          Imortals. <br />
          Time-capsules from sometime ago. I alwasy found the eyes to be
          everyones best feature.
        </p>
      </article>
      <Gallery section="portraits" folder="editorial" />
    </section>
  );
}
