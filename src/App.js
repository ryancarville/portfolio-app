import React from "react";
import Nav from "./components/Nav/Nav";
import "./Animations/Animations.css";
import "./App.css";
import Router from "./Router/Router";

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}

export default App;
