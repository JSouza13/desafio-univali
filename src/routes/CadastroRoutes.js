import React from "react";
import { Switch, Route } from "react-router-dom";

import Pages from "../pages";

const { Cadastro, Relatorio } = Pages;

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Relatorio} />
      <Route path="/relatorio" component={Relatorio} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  );
}
