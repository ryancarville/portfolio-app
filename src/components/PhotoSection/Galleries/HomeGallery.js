import React, { Component } from "react";
import "./HomeGallery.css";

export default class HomeGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "https://beardystudios.com/dev_site_images/home-gallery/01.png",
      alt: "home-galley-1"
    };
  }
  rotateImages = () => {
    let i = 2;
    setInterval(() => {
      this.setState({
        imgUrl: `https://beardystudios.com/dev_site_images/home-gallery/0${i}.png`,
        alt: `home-galley-${i}`
      });
      i++;
      if (i === 4) {
        i = 1;
      }
    }, 6000);
  };
  componentDidMount() {
    window.scroll(0, 0);
    this.rotateImages();
    this.startFade();
  }
  swapImage = () => {
    console.log("test");
    const image = document.querySelector("#home-gallery-img");
    image.classList.add("fade-out");
  };
  startFade = () => {
    const images = document.querySelector("#home-gallery-img");
    console.log(images);
    images.addEventListener("transitionend", this.swapImage);
  };

  render() {
    return (
      <section id="home-gallery">
        <img
          id="home-gallery-img"
          src={this.state.imgUrl}
          alt={this.state.alt}
        />
      </section>
    );
  }
}
