import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <section className="section-wrapper contact-wrapper">
        <header>
          <h2>Let's get to know eachother! </h2>
        </header>
        <p>
          You can email me{" "}
          <b>
            <a href="mailto:ryancarville@gmail.com?subject=Hello from your awesome porfolio site!">
              here
            </a>
          </b>
          <br />
          Looking forwar to hearing from you!
        </p>
      </section>
    );
  }
}
