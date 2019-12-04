import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import BequiaApp from "../components/BequiaApp/BequiaApp";
import PhotoGramApp from "../components/PhotoGramApp/PhotoGramApp";
import MusicQuizApp from "../components/MusicQuizApp/MusicQuizApp";
import NotFound from "../components/404/404";
import PhotoHome from "../components/PhotoHome/PhotoHome";
export default function Router(props) {
  return (
    <>
      {props.siteView.photoSite ? (
        <Redirect to={"/content-creation"} />
      ) : (
        <Redirect to={"/"} />
      )}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/content-creation" component={PhotoHome} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/BequiaApp" component={BequiaApp} exact />
        <Route path="/PhotoGramApp" component={PhotoGramApp} exact />
        <Route path="/MusicQuizApp" component={MusicQuizApp} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
