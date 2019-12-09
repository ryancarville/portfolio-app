import React from "react";
import { Link } from "react-router-dom";

export default function PhotoCatagoies(props) {
  return (
    <ul id="desktop-nav-projects">
      <li className="close-nav">
        <i
          className="fas fa-times"
          samesite="none"
          onClick={props.closeProjects}
        ></i>
      </li>
      <li id="nav-photo-1">
        <Link to={"/portraits"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/portrait.html"
            alt="portrait-icon"
          />{" "}
          Portrait
        </Link>
      </li>
      <li id="nav-photo-2">
        <Link to={"/food"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/food.png"
            alt="food-icon"
          />
          Food
        </Link>
      </li>

      <li id="nav-photo-3">
        <Link to={"/products"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/products.png"
            alt="products-icon"
          />{" "}
          Product
        </Link>
      </li>
    </ul>
  );
}
