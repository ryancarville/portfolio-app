import React, { Component } from "react";
import "./Food.css";
import Gallery from "../Gallery";

export default class Food extends Component {
  render() {
    return (
      <section className="photo-section-wrapper">
        <header>
          <h1>Food</h1>
        </header>
        <Gallery folder="food" />
      </section>
    );
  }
}
