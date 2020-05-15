import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Appointments from "./Appointments";
import Contact from "./Contact";
import portfolioLinks from "./Portfolio";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/appointments" component={Appointments} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={portfolioLinks} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
