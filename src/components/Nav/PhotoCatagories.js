import React from "react";
import { Link } from "react-router-dom";

export default function PhotoCatagoies(props) {
  return (
    <ul>
      <li>
        <i
          className="fas fa-times"
          samesite="none"
          onClick={props.closeProjects}
        ></i>
      </li>
      <li>
        <Link to={"/portraits"}>
          <img src="/images/portrait.png" alt="portrait-icon" /> Portrait
        </Link>
      </li>
      <li>
        <Link to={"/food"}>
          <img src="/images/food.png" alt="food-icon" />
          Food
        </Link>
      </li>

      <li>
        <Link to={"/products"}>
          <img src="/images/products.png" alt="products-icon" /> Product
        </Link>
      </li>
    </ul>
  );
}
