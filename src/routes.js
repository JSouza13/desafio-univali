import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainTemplate from "./layouts/Main";
import Formulario from "./pages/CadastroItem";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Formulario} />
      </Switch>
    </BrowserRouter>
  );
}
