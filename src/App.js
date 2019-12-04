import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import SiteContext from "./SiteContext";
import "./Animations/Animations.css";
import "./App.css";
import Router from "./Router/Router";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devSite: true,
      photoSite: false
    };
  }
  handleSiteView = () => {
    this.setState(
      {
        devSite: !this.state.devSite,
        photoSite: !this.state.photoSite
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    const contextValue = {
      appState: this.state,
      handleSiteView: this.handleSiteView
    };
    return (
      <SiteContext.Provider value={contextValue}>
        <div className="App">
          <Nav handleSiteView={() => this.handleSiteView()} />
          <Router siteView={this.state} />
        </div>
      </SiteContext.Provider>
    );
  }
}
