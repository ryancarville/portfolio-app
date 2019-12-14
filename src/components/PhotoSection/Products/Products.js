import React from "react";
import "./Products.css";
import Gallery from "../Galleries/Gallery";
export default function Products(props) {
  window.scroll(0, 0);
  return (
    <section className="photo-section-wrapper">
      <header>
        <h1>Products</h1>
      </header>
      <article>
        <p>Your things! </p>
      </article>
      <Gallery section="products" folder="products" />
    </section>
  );
}
