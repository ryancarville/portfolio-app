import React from "react";
import { Link } from "react-router-dom";

export default function PhotoCatagoies(props) {
  return (
    <>
      <li className="close-nav desktop-nav-projects">
        <i className="fas fa-times" onClick={props.closeProjects}></i>
      </li>
      <li id="nav-photo-1">
        <Link to={"/portraits"}>
          <img
            src="https://beardystudios.com/images/dev_site_images/portrait.png"
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
    </>
  );
}
