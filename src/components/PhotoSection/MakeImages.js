import React, { Component } from "react";
import "./MakeImages.css";
export default class MakeImages extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], imagesLoaded: false };
  }
  makeImages = () => {
    return this.state.images.map(img => (
      <img key={img.alt} src={img.url} alt={img.alt} className="image" />
    ));
  };
  componentDidMount() {
    const images = [];
    let i = 1;
    while (i < 10) {
      var image = {
        url: `https://beardystudios.com/dev_site_images/${this.props.folder}/0${i}.jpg`,
        alt: `food-${i}`
      };
      images.push(image);
      i++;
    }

    if (i === 10) {
      this.setState({
        images: images,
        imagesLoaded: true
      });
    }
  }
  componentWillUnmount() {
    this.setState({
      images: []
    });
  }
  render() {
    return this.state.imagesLoaded ? (
      <section className="image-gallery-wrapper">{this.makeImages()}</section>
    ) : (
      <p>Loading...</p>
    );
  }
}
