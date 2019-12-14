import React, { Component } from "react";
import Masonary from "react-masonry-css";
import "./Gallery.css";
import images from "../../../helper";

function imagesLoaded(parentNode) {
  console.log(parentNode);
  const imgElements = document.getElementsByClassName("image");
  console.log(imgElements);
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], loading: true, imageClass: "image" };
  }
  handleImageChange = () => {
    this.setState({
      loading: !imagesLoaded(this.galleryElement)
    });
  };
  renderSpinner = () => {
    if (!this.state.loading) {
      // Render nothing if not loading

      return null;
    }
    return (
      <span className="spinner">
        <img
          src="https://thumbs.gfycat.com/SpryNegligibleLeafcutterant-size_restricted.gif"
          alt="gallery-loader"
        />
        Loading...
      </span>
    );
  };
  handleStateChange = () => {
    this.setState({
      loading: !imagesLoaded(this.galleryElement)
    });
  };
  makeImage = img => {
    return (
      <img
        key={img.alt}
        loading="eager"
        onLoad={this.handleStateChange}
        onError={this.handleStateChange}
        src={img.url}
        alt={img.alt}
        className={this.state.imageClass}
      />
    );
  };

  componentDidMount() {
    const section = this.props.section;
    const folder = this.props.folder;
    for (let i = 0; i < images.length; i++) {
      if (images[i].name === section) {
        images[i].subs.forEach(sub => {
          if (sub.name === folder) {
            for (let j = 0; j <= sub.numOfImg; j++) {
              var image = {
                url:
                  sub.image_data.url +
                  `${folder}` +
                  "/" +
                  `${folder}_0${j}.jpg`,
                alt: `${this.props.folder}-0${j}`
              };
              images.push(image);
              if (j === sub.numOfImg) {
                this.setState({
                  images: images
                });
              }
            }
          }
        });
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      images: []
    });
  }
  render() {
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
    return (
      <section className="image-gallery-wrapper">
        {this.renderSpinner()}
        <Masonary
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
          ref={element => {
            this.galleryElement = element;
          }}
        >
          {this.state.images.map(img => this.makeImage(img))}
        </Masonary>
      </section>
    );
  }
}
