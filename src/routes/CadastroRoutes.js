import React from "react";
import { Switch, Route } from "react-router-dom";

import Pages from "../pages";

const { Cadastro, Relatorio, Editar } = Pages;

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Relatorio} />
      <Route exact path="/produto" component={Relatorio} />
      <Route exact path="/produto/editar/:key" component={Editar} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  );
}
