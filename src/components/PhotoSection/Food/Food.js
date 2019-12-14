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
        <article>
          <p>
            I hope you came hungry! <br />
            Food is beautiful, emotional. Here are a few morsells to nibble on.{" "}
          </p>
        </article>
        <Gallery section="food" folder="breakfest" />
      </section>
    );
  }
}
