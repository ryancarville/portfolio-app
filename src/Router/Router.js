import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import BequiaApp from "../components/BequiaApp/BequiaApp";
import PhotoGramApp from "../components/PhotoGramApp/PhotoGramApp";
import MusicQuizApp from "../components/MusicQuizApp/MusicQuizApp";
import NotFound from "../components/404/404";

export default function Router(props) {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/BequiaApp" component={BequiaApp} exact />
      <Route path="/PhotoGramApp" component={PhotoGramApp} exact />
      <Route path="/MusicQuizApp" component={MusicQuizApp} exact />
      <Route component={NotFound} />
    </Switch>
  );
}
