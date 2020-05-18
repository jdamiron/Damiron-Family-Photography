import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Appointments from "./Appointments";
import Contact from "./Contact.jsx";
import App from "./App";
import NotFound from "./NotFound";
import Portfolio from "./Portfolio";
import ThankYouPage from "./Thanks";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/appointments" component={Appointments} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/thanks" component={ThankYouPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
