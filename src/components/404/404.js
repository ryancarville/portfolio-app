import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./404.css";

export default class NotFound extends Component {
  render() {
    return (
      <section className="not-found-page-wrapper">
        <article className="not-found-text">
          <h1>404</h1>
          <p>
            You found it! Well done. But you may get bored here quickly so I
            reccomend heading back to the home page.{" "}
          </p>
          <Link to="/">Homepage</Link>
        </article>
        <img src="/images/not-found.jpg" alt="404-not-found" />
      </section>
    );
  }
}
