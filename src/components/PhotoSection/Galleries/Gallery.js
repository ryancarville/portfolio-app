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
    var madeImages = [];
    const section = this.props.section;
    const folder = this.props.folder;
    const data = images.filter(sec => sec.name === section);
    console.log(data);
    data[0].subs.forEach(sub => {
      for (let i = 1; i <= sub.numOfImg; i++) {
        var image = {
          url: sub.image_data.url + `${folder}` + "/" + `0${i}.jpg`,
          alt: `${this.props.folder}-0${i}`
        };
        madeImages.push(image);
      }
    });
    if (madeImages.length > 0) {
      this.setState({
        images: madeImages
      });
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
