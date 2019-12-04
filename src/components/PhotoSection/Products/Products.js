import React from "react";
import "./Products.css";
import MakeImages from "../MakeImages";
export default function Products(props) {
  return (
    <section className="photo-section-wrapper">
      <header>
        <h1>Products</h1>
      </header>
      <MakeImages folder="products" />
    </section>
  );
}
