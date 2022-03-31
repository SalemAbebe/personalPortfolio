import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/ContactMe/Contact";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
);
