import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;