import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "../layouts/Main";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Cadastro */}
        <Route path="/" component={MainTemplate} />
      </Switch>
    </BrowserRouter>
  );
};
