import React from "react";
import "./Products.css";
import Gallery from "../Gallery";
export default function Products(props) {
  return (
    <section className="photo-section-wrapper">
      <header>
        <h1>Products</h1>
      </header>
      <Gallery folder="products" />
    </section>
  );
}
