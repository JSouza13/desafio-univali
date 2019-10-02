import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainTemplate from "./layouts/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainTemplate} />
      </Switch>
    </BrowserRouter>
  );
}
