import React from "react";
import "./Portraits.css";
import MakeImages from "../MakeImages";

export default function Portraits(props) {
  return (
    <section className="photo-section-wrapper">
      <header>
        <h1>Portraits</h1>
      </header>
      <MakeImages folder="portriats" />
    </section>
  );
}
