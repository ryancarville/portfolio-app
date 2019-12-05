import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DevHome from "../components/DevSection/DevHome/DevHome";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import BequiaApp from "../components/DevSection/BequiaApp/BequiaApp";
import PhotoGramApp from "../components/DevSection/PhotoGramApp/PhotoGramApp";
import MusicQuizApp from "../components/DevSection/MusicQuizApp/MusicQuizApp";

import PhotoHome from "../components/PhotoSection/PhotoHome/PhotoHome";
import Food from "../components/PhotoSection/Food/Food";
import Portraits from "../components/PhotoSection/Portraits/Portraits";
import Products from "../components/PhotoSection/Products/Products";
import NotFound from "../components/404/404";
export default function Router(props) {
  return (
    <>
      {props.siteView.photoSite ? (
        <Redirect to={"/content-creation"} />
      ) : (
        <Redirect to={"/"} />
      )}
      <Switch>
        <Route path="/" component={DevHome} exact />
        <Route path="/content-creation" component={PhotoHome} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/BequiaApp" component={BequiaApp} exact />
        <Route path="/PhotoGramApp" component={PhotoGramApp} exact />
        <Route path="/MusicQuizApp" component={MusicQuizApp} exact />
        <Route path="/food" component={Food} exact />
        <Route path="/portraits" component={Portraits} exact />
        <Route path="/products" component={Products} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
