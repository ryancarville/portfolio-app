import React, { Component } from "react";
import "./Food.css";
import Gallery from "../Galleries/Gallery";

export default class Food extends Component {
  render() {
    window.scroll(0, 0);
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
