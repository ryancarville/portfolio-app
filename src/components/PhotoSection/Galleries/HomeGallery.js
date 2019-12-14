import React, { Component } from "react";
import "./HomeGallery.css";


export default class HomeGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "https://beardystudios.com/dev_site_images/home-gallery/01.jpg",
      alt: "home-galley-1"
    };
  }
  rotateImages = () => {
    let i = 2;
    setInterval(() => {
      this.setState({
        imgUrl: `https://beardystudios.com/dev_site_images/home-gallery/0${i}.jpg`,
        alt: `home-galley-${i}`
      });
      i++;
      if (i === 4) {
        i = 1;
      }
    }, 9000);
  };
  componentDidMount() {
    window.scroll(0, 0);
    this.rotateImages();
  }

  render() {
    return (
      <section id="home-gallery">
        <img src={this.state.imgUrl} alt={this.state.alt} />
      </section>
    );
  }
}
