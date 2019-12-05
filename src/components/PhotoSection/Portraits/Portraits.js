import React from "react";
import "./Portraits.css";
import Gallery from "../Gallery";

export default function Portraits(props) {
  return (
    <section className="photo-section-wrapper">
      <header>
        <h1>Portraits</h1>
      </header>
      <Gallery folder="portriats" />
    </section>
  );
}
